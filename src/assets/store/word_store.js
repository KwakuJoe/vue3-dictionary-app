import { defineStore } from 'pinia'
import axios from 'axios';

export const useWordStore = defineStore('word', {
    // other options...
    state: () => ({
        data: [],
        not_found_errors:"",
        errors:{
            notFoundIcon:true,
            title:'',
            message:'',
            resolution:''
        }, 
        loading:false,
    }),

    actions:{
        async searchWord(word){
            this.loading = true;
            try {
                const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                if (response.status === 200) {
                    // Request was successful
                    // console.log( response.data);
                    this.data = response.data;
                for (let index = 0; index < this.data.length; index++) {
                    const element = this.data[index];
                    console.log(element.word)
                    
                }

                    // console.log(this.data)
                    // context.commit('SET_DATA', response.data);

                  } else {
                    // Handle other status codes
                    console.log('Unexpected status code:', response.status.code);
                    
                    this.not_found_errors = response.status


                    console.log(this.not_found_errors)
                    // context.commit('SET_NOT_FOUND_ERROR', response.status);
                    // this.isLoading = false
                    // 'bi bi-binoculars'

                  }
            }catch(error) {
                console.log(error)
                // this.errors = error
               
                    if (error.response) {
                      // The request was made, and the server responded with a status code outside the 2xx range
                      this.errors.notFoundIcon = true, 
                      this.errors.message = error.response.data.message,
                      this.errors.title = error.response.data.title,
                      this.errors.resolution = error.response.data.resolution
                      // return `Error: ${error.response.status} - ${error.response.data}`;
                    } else if (error.request) {
                      // The request was made, but no response was received
                      this.errors.notFoundIcon = false, 
                      this.errors.message = 'No response recieved',
                      this.errors.title = 'We didnt get a response from ther database',
                      this.errors.resolution = 'Please try again or with a different word'
                      // return 'Error: No response received.';
                    } else {
                    this.errors.notFoundIcon = false, 
                      this.errors.message = error.message,
                      this.errors.title = 'Error occured during setup',
                      this.errors.resolution = 'Please try again or with a different word'
                      // return 'Error: ' + error.message;
                    }
                  
                // context.commit('SET_ERROR', error);
                // this.isLoading = false


            }finally{
                this.loading = false;
                console.log('fanally')
            }
        }
    }
  })