!function(){"use strict";function php_email_form_submit(thisForm,action,formData){fetch(action,{method:"POST",body:formData,headers:{"X-Requested-With":"XMLHttpRequest"}}).then((response=>{if(response.ok)return response.text();throw new Error(`${response.status} ${response.statusText} ${response.url}`)})).then((data=>{if(thisForm.querySelector(".loading").classList.remove("d-block"),"OK"!=data.trim())throw new Error(data||"Form submission failed and no error message returned from: "+action);thisForm.querySelector(".sent-message").classList.add("d-block"),thisForm.reset()})).catch((error=>{displayError(thisForm,error)}))}function displayError(thisForm,error){thisForm.querySelector(".loading").classList.remove("d-block"),thisForm.querySelector(".error-message").innerHTML=error,thisForm.querySelector(".error-message").classList.add("d-block")}document.querySelectorAll(".php-email-form").forEach((function(e){e.addEventListener("submit",(function(event){event.preventDefault();let thisForm=this,action=thisForm.getAttribute("action"),recaptcha=thisForm.getAttribute("data-recaptcha-site-key");if(!action)return void displayError(thisForm,"The form action property is not set!");thisForm.querySelector(".loading").classList.add("d-block"),thisForm.querySelector(".error-message").classList.remove("d-block"),thisForm.querySelector(".sent-message").classList.remove("d-block");let formData=new FormData(thisForm);recaptcha?"undefined"!=typeof grecaptcha?grecaptcha.ready((function(){try{grecaptcha.execute(recaptcha,{action:"php_email_form_submit"}).then((token=>{formData.set("recaptcha-response",token),php_email_form_submit(thisForm,action,formData)}))}catch(error){displayError(thisForm,error)}})):displayError(thisForm,"The reCaptcha javascript API url is not loaded!"):php_email_form_submit(thisForm,action,formData)}))}))}();