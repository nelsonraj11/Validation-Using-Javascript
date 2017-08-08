function validate()
{      
 //first and last name

        if( document.myForm.fname.value == "" )
         {
              //alert( "Please provide your First  name!" );
                 document.getElementById('errorfirstname').innerHTML = "Please provide a firstname";
                  //document.myForm.fname.focus() ;       
         }

         if( document.myForm.lname.value == "" )
         {
              // alert( "Please provide your Last name!" );
                document.getElementById('errorlastname').innerHTML = "Please provide a Lastname";
                  //document.myForm.lname.focus() ;
         }

 //Email

        {
         var email = document.getElementById('txtmail');
             var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
               if (!filter.test(email.value))
               {
                 //alert('Please provide a valid email address');
                   //email.focus;
                      document.getElementById('erroremail').innerHTML = "Please provide a valid email address";
                        //document.myForm.email.focus();
                }
        }
        
 //Mobile Number

        var phoneNo = document.getElementById('mnumber');

           if (document.myForm.mnumber.value == "" || document.myForm.mnumber.value == null) 
              {
                //alert("Please enter your Mobile No.");
                   document.getElementById('errormobilenumber').innerHTML = "Please enter your Mobile No.";
                    //document.myForm.mnumber.focus() ;
               }
           if (document.myForm.mnumber.value.length < 10 || document.myForm.mnumber.value.length > 10) 
              {
                //alert("Please Enter a Valid 10 Digit Mobile Number !!!");
                   document.getElementById('errormobilenumber').innerHTML = "Please enter a valid 10 digit Mobile Number.";
                    //document.myForm.mnumber.focus() ;
             }

  // password

         var p = document.getElementById('password').value,
            errors = [];
              if (p.length < 6)
                {
                  errors.push("Your password must be at least 6 characters"); 
                }
              if (p.search(/[A-Z]/i) < 0)
                {
                  errors.push("and use one upper case");
                } 
              if (p.search(/[~!,*@]/i) < 0)
                {
                  errors.push(" use special characters ~!,*");
                }
              if (p.search(/[0-9]/) < 0) 
                {
                  errors.push(" and use one digit "); 
               }
              if (errors.length > 0)
                {
                  //alert(errors.join("\n"));
                     document.getElementById('errorpassword').innerHTML = errors.join("\n");
                        //document.myForm.password.focus();
                          return false;
                }
       
  //conform_password

           if (document.myForm.password.value != document.myForm.confirmpassword.value) 
           {
                 document.getElementById('errorconfirmpassword').innerHTML="Password not matching !";
                     document.getElementById('errorconfirmpassword').style.color="red";
           } 
          else
           {
               //document.getElementById('errorConfirmPassword').innerHTML="Password matched!";
                  //document.getElementById('errorConfirmPassword').style.color="green";
                    alert("Registration successful !!!");
           }

              return false;
   
}


//keypressfunction
    
        function ffunction() 
                {
                document.getElementById('errorfirstname').innerHTML="";

                }

        function lfunction()
                {
                document.getElementById('errorlastname').innerHTML="";

                }

        function efunction()
                {
                document.getElementById('erroremail').innerHTML="";
                }

        function mfunction()
                {
                document.getElementById('errormobilenumber').innerHTML="";
                }

        function pfunction()
                {
                 document.getElementById('errorpassword').innerHTML="";
                }

        function cpfunction()
                {
                document.getElementById('errorconfirmpassword').innerHTML="";
                }


//keyupfunction

        function f2function() 
            {
                if( document.myForm.fname.value == "" )
                     document.getElementById('errorfirstname').innerHTML = "Please provide a firstname";
            }

        function l2function()
            {   
                if( document.myForm.lname.value == "" )
                    document.getElementById('errorlastname').innerHTML="Please provide  a Lastname";
            }

        function e2function()
            {
                 var email = document.getElementById('txtmail');
                     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                       if (!filter.test(email.value))
                          {
                            //alert('Please provide a valid email address');
                              //email.focus;
                                  document.getElementById('erroremail').innerHTML = "Please provide a valid email address";
                                    //document.myForm.email.focus();
                          }
            }

        function m2function()
            {
                var phoneNo = document.getElementById('mnumber');
                  if (document.myForm.mnumber.value == "" || document.myForm.mnumber.value == null) 
                      {
                          //alert("Please enter your Mobile No.");
                            document.getElementById('errormobilenumber').innerHTML = "Please enter your Mobile No.";
                              //document.myForm.mnumber.focus() ;
                      }
                  if (document.myForm.mnumber.value.length < 10 || document.myForm.mnumber.value.length > 10) 
                      {
                          //alert("Please Enter a Valid 10 Digit Mobile Number !!!");
                             document.getElementById('errormobilenumber').innerHTML = "Please enter a valid 10 digit Mobile Number.";
                              //document.myForm.mnumber.focus() ;
                      }
            }

        function p2function()
            {
                var p = document.getElementById('password').value,
                     errors = [];
                   if (p.length < 6)
                  {
                       errors.push("Your password must be at least 6 characters"); 
                      }
                   if (p.search(/[A-Z]/i) < 0)
                   {
                       errors.push("and use one upper case");
                       } 
                   if (p.search(/[~!,*@]/i) < 0)
                   {
                       errors.push(" use special characters ~!,*");
                      }
                   if (p.search(/[0-9]/) < 0) 
                   {
                       errors.push(" and use one digit "); 
                       }
                   if (errors.length > 0)
                    {
                        //alert(errors.join("\n"));
                            document.getElementById('errorpassword').innerHTML = errors.join("\n");
                                //document.myForm.password.focus();
                                    return false;
                     }
            }




        function cp2function()
            {
                if(document.myForm.confirmpassword.value=="")
                    document.getElementById('errorconfirmpassword').innerHTML="Please re-enter your password";
            }






        function reloadFunction() 
            {
                location.reload();
            }




