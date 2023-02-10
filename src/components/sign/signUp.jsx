import { TextField } from "@material-ui/core";

const SignUp = () => {

    function onSignIn(googleUser) {
        // get user profile information
        console.log(googleUser.getBasicProfile())
      }



  return (
    <>
      <div className=" ">
        <div className=" my-44">
          <div className="flex gap-2 px-2 py-2">
            <TextField
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              id="filled-password-input"
              label="First Name"
              type="text"
              autoComplete="current-password"
              variant="filled"
              className=" "
            />
            <TextField
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              id="filled-password-input"
              label="Last Name"
              type="text"
              autoComplete="current-password"
              variant="outlined"
              className=" "
            />
          </div>
          <div className="mx-2 flex justify-center">
          <TextField
              inputProps={{ style: { color: "black" ,width: "350px"} }}
              InputLabelProps={{
                style: { color: "black" },
              }}
              label="Email"
              type="email"
            
              className=""
            />
          </div>
        </div>
      </div>
      <div>




        <div ><button data-onsuccess="onSignIn" className="g-signin2  ml-44 px-12 py-4 rounded-lg bg-cyan-600 text-xl ">signIN</button></div>
      </div>
    </>
  );
};

export default SignUp;
