import React from 'react';
import { useEffect } from "react"; 
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/core/MenuIcon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import CircularProgress from '@material-ui/core/CircularProgress';


import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


import Snackbar from '@material-ui/core/Snackbar';



import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';


import {    BrowserRouter as Router,    Switch,    Route,    Link as ReactLink, useParams, Redirect } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import clsx from 'clsx';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import InputLabel from '@material-ui/core/InputLabel';

import Alert from '@material-ui/lab/Alert';
import { AlertTitle } from '@material-ui/lab';



const useStyles = makeStyles((theme) => ({
  loginForm : {
    border : "1px solid gray",
    backgroundColor : "red"
  },
  floatRight:{
    float : "right"
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  textDecoration:{
    textDecoration : 'none'
  },
  table: {
    minWidth: 650,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));
const Title = ({title}) =>{
  return (
    <div>
      <h3>Multicontent Management</h3>
      <h4>{title}</h4>
    </div>
  )
}
const AlertSuccess = ({alertSuccessState,closeAlert}) =>{
  let {status,title,content} = alertSuccessState;
  return (
    <div>
      <Alert variant="outlined" className="hidden" severity="error" onClose={closeAlert}>
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert variant="outlined" severity="success" open={status} onClose={closeAlert}>{title} - {content}</Alert>
    </div>
    
  )
}
const LoginForm = ({login}) =>{
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const internalLogin = (evt) =>{
    evt.preventDefault();
    console.log("internalLogin");
    console.log(usernameRef);
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    console.log({username,password});
    if(username === "" || username === undefined) {
      alert("username has to be provided");
      return;
    }
    if(password === ""  || username === undefined) {
      alert("password has to be provided");
      return;
    }
    login({username,password});
  }
  return (
      <div>
        <form  onSubmit={internalLogin}>
        <TextField type="text" label="Username" variant="outlined" inputRef={usernameRef} required/>
        <br></br>
        <br></br>
        <TextField type="password" label="Password" variant="outlined" inputRef={passwordRef} required />
        <br></br>
        <br></br>
        <Button type="submit" variant="contained" color="default">
          Sign In
        </Button>
        </form>
        <br></br>
        <br></br>
        <span>
          <ReactLink to="forgetpassword"  style={{textDecoration:"none"}}>Forget Password?</ReactLink>          
        </span>
        <br></br>
        <br></br>
        <span>
          Don't have an account? <ReactLink to="signup"  style={{textDecoration:"none"}}>Sign Up</ReactLink> 
        </span>
        <br></br>
        <br></br>
      </div>
  )
}
const SignUpForm = ({register}) =>{
  const emailRef = React.createRef();
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const passwordComfirmRef = React.createRef();

  const internalRegister = (evt) =>{
    evt.preventDefault();
    console.log("internalRegister");
    let email = emailRef.current.value;
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    let passwordComfirm = passwordComfirmRef.current.value;
    console.log({username,password});
    if(username == "" || username == undefined) {
      alert("email has to be provided");
      return;
    }
    if(username == "" || username == undefined) {
      alert("username has to be provided");
      return;
    }
    if(password == ""  || username == undefined) {
      alert("password has to be provided");
      return;
    }
    if(password != passwordComfirm) {
      alert("two password has to be equal");
      return;
    }
    register({email,username,password});
  }
  return (
      <div>
        
        <form  onSubmit={internalRegister}>
        <TextField type="email"  label="Email" variant="outlined" inputRef={emailRef} required/>
        <br></br>
        <br></br>
        <TextField type="text"  label="Username" variant="outlined" inputRef={usernameRef} required />
        <br></br>
        <br></br>
        <TextField type="password"  label="Password" variant="outlined" inputRef={passwordRef} required />
        <br></br>
        <br></br>
        <TextField type="password"  label="Comfirm Password" variant="outlined" inputRef={passwordComfirmRef}  required/>
        <br></br>
        <br></br>
        <Button type="submit" variant="contained" color="default">
          Register
        </Button>
        </form>
        <br></br>
        <br></br>
        <span>
          Already registered? <ReactLink to="" style={{textDecoration:"none"}}>Sign In</ReactLink> 
        </span>
        <br></br>
        <br></br>
      </div>
  )
}
const ForgetPasswordForm = (props) =>{
  return (
      <div>
        <TextField type="text" id="emailInput" label="Email" variant="outlined"/>
        <br></br>
        <br></br>
        <Button variant="contained" color="default">
          <ReactLink to="main" style={{textDecoration:"none"}}>Request New Password</ReactLink>
        </Button>
        <br></br>
        <br></br>
        <span>
          Already registered? <ReactLink to=""  style={{textDecoration:"none"}}>Sign In</ReactLink> 
        </span>
        <br></br>
        <br></br>
        <span>
          Don't have an account? <ReactLink to="signup"  style={{textDecoration:"none"}}>Register</ReactLink> 
        </span>
        <br></br>
        <br></br>
      </div>
  )
}
const MyAccountForm = ({user,update,setUser}) =>{
  const idRef = React.createRef();
  const emailRef = React.createRef();
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const passwordComfirmRef = React.createRef();

  //let user = user2;

  const onChangeInput = (key,ref) =>{
    console.log("onChangeInput"+ref.current.value);
    //setUser({key:ref.current.value});
    //console.log(user);
  }
  const internalUpdate = () =>{
    console.log("internalUpdate");
    let id = idRef.current.value;
    let email = emailRef.current.value;
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    let passwordComfirm = passwordComfirmRef.current.value;
    console.log({username,password});
    if(id == "" || id == undefined) {
      alert("id has to be provided");
      return;
    }
    if(username == "" || username == undefined) {
      alert("email has to be provided");
      return;
    }
    if(username == "" || username == undefined) {
      alert("username has to be provided");
      return;
    }
    if(password == ""  || username == undefined) {
      alert("password has to be provided");
      return;
    }
    if(password != passwordComfirm) {
      alert("two password has to be equal");
      return;
    }
    update({id,email,username,password});
  }
  return (
      <div>
        <p>{user.role}</p>
        <TextField type="number" label="ID" variant="outlined" value={user.id} inputRef={idRef}  disabled/>
        <br></br>
        <br></br>
        <TextField type="text"  label="Email" variant="outlined"  defaultValue={user.email} inputRef={emailRef}  />
        <br></br>
        <br></br>
        <TextField type="text" label="Username" variant="outlined"  defaultValue={user.username} inputRef={usernameRef}  />
        <br></br>
        <br></br>
        <TextField type="password" label="Password" variant="outlined" inputRef={passwordRef} />
        <br></br>
        <br></br>
        <TextField type="password" label="Comfirm Password" variant="outlined" inputRef={passwordComfirmRef} />
        <br></br>
        <br></br>
        <Button variant="contained" color="default" onClick={internalUpdate}>
          Update
        </Button>
        
      </div>
  )
}
const UserSection = () =>{
  return (
    <div>
      <h5>Project List</h5>
      <p>This is user section,</p>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
      </ul>
    </div>
  )
}

const UserEditForm = ({user,update}) =>{
  const idUserEditRef = React.createRef();
  const emailUserEditRef = React.createRef();
  const usernameUserEditRef = React.createRef();
  const passwordUserEditRef = React.createRef();
  const passwordComfirmUserEditRef = React.createRef();
  const roleUserEditRef = React.createRef();

  const internalUpdate = () =>{
    console.log("internalUpdate");
    let id = idUserEditRef.current.value;
    let email = emailUserEditRef.current.value;
    let username = usernameUserEditRef.current.value;
    let password = passwordUserEditRef.current.value;
    let passwordComfirm = passwordComfirmUserEditRef.current.value;
    let role = roleUserEditRef.current.value;
    console.log({username,password,email,id,passwordComfirm,role});
    
    if(password != passwordComfirm) {
      alert("two password has to be equal");
      return;
    }
    update({id,email,username,password,role});
  }
  return (
      <div>
        <p>{user.role}</p>
        <TextField type="number" label="ID" variant="outlined" value={user.id} inputRef={idUserEditRef}  disabled/>
        <br></br>
        <br></br>
        <TextField type="text" label="Email" variant="outlined"  value={user.username} inputRef={usernameUserEditRef} disabled/>
        <br></br>
        <br></br>
        <TextField type="text" label="Username" variant="outlined" value={user.email} inputRef={emailUserEditRef} disabled/>
        <br></br>
        <br></br>
        <TextField type="password" label="Password" variant="outlined" inputRef={passwordUserEditRef} />
        <br></br>
        <br></br>
        <TextField type="password" label="Comfirm Password" variant="outlined" inputRef={passwordComfirmUserEditRef} />
        <br></br>
        <br></br>
        <FormControl variant="outlined" style={{minWidth: 120}}>
        <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Role"
          inputRef={roleUserEditRef}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="register">Register</MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
      </FormControl>

        <br/>
        <br/>

        <Button variant="contained" color="default" onClick={internalUpdate}>
          Update
        </Button>

        <br/><br/><br/>
        <ReactLink to="/main"  style={{textDecoration:"none"}}>
                          Back to Main
        </ReactLink>
        
      </div>
  )
}
const AboutApp = ({props}) =>{
  return (
    <div>
      <p>This is About App Section</p>
    </div>
  )
}

const DialogOk = ({dialogOkState,closeDialogOk}) =>{
  let {status,title,content} = dialogOkState;
  return (
    <Dialog
        open={status}
        onClose={closeDialogOk}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialogOk} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
  )
}


function createData(id,username,email,status) {
  return { id,username,email,status };
}

const rows = [
  createData(1,'user1','user1@gmail.com','register'),
  createData(2,'user2','user2@gmail.com','register'),
  createData(3,'user3','user3@gmail.com','user'),
  createData(4,'user4','user4@gmail.com','admin')
];


function App() {
  const webserviceBaseUrl = "http://localhost/";
  const webserviceAppUrl = "react_native/api/v1/";
  const webserviceMulticontentEndpoint = "multicontent/index.php";
  const webserviceUserEndpoint = "user/index.php";
  
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [users,setUsers] = React.useState([]);
  const [user,setUser] = React.useState({});
  const [currentEditUser,setCurrentEditUser] = React.useState({});

  const [backdrop,setBackdrop] = React.useState(false);
  const [backdropText,setBackdropText] = React.useState('Loading...');

  const [internalLink,setInternalLink] = React.useState('');
  const [dialogOkState,setDialogOkState] = React.useState({status:false,title:"Title",content:'Content'});
  

  const login = ({username,password}) =>{
    // login operation
    // setUser on success / fail
    
    setInternalLink('');
    setBackdrop(true);
    setBackdropText('Signing In...');
    console.log("login is calling.."); 
    let formData = new FormData();
    formData.append("username",username);
    formData.append("password",password);
    formData.append("ops_type","login");
    let url = webserviceBaseUrl+webserviceAppUrl+webserviceUserEndpoint;
    fetch(url,{
      method : 'POST',
      body : formData
    }).then(res=>{
      console.log(res);
      return res.text(); // this is promise , will resolve response text
    })
    .then(data=>{
      console.log("return data  is ");
      console.log(data);
      try{
        data = JSON.parse(data);
      }
      catch(error){
        console.log("error in parsing");
        data = {};
      }
      console.log(data);
      // set user data 
      setTimeout(function(){
        if(data.status === true ){
          if(data.data.role == "register"){
            setBackdrop(false);
            openDialogOk({title:"Admin Approvel",content:"You need admin approval before to use your account"});
            //setBackdropText('You need admin approval');
            // setTimeout(function(){
              
            // },1000);
          }
          else if(data.data.role == "user"){
            //setBackdropText('Login Success'); // alert / snack bar
            setUser(data.data);
            localStorage.setItem("user",JSON.stringify(data.data));
            setInternalLink('usersection');
            setBackdrop(false);
            // let limit = 0;
            // let last_id = 0;
            // //selectAllUser({limit,last_id});
            // // we need to call porject list for that user
            // setTimeout(function(){
              
            // },1000);
            
          }else{
            setBackdropText('Login Success');
            setUser(data.data);
            localStorage.setItem("user",JSON.stringify(data.data));
            setInternalLink('main');
            let limit = 0;
            let last_id = 0;
            selectAllUser({limit,last_id});
          }          
        }else{
          setBackdrop(false);
          openDialogOk({title:"Login Fail",content:"Username and password do not match"});

          //setBackdropText('Username and password do not match!');
          // setTimeout(function(){
          //   setBackdrop(false);
          // },1000);
        }
        
      },2000);
    })
    .catch(err => {
      console.log("network error");
      console.log(err);setTimeout(function(){
        setBackdropText('Network Error');
        setTimeout(function(){
          setBackdrop(false);
        },2000);
      },2000);
    })
  }

  const register = ({email,username,password}) =>{
    // login operation
    // setUser on success / fail
    
    setInternalLink('signup');
    setBackdrop(true);
    setBackdropText('Data uploading...');
    console.log("register is calling.."); 
    let formData = new FormData();
    formData.append("email",email);
    formData.append("username",username);
    formData.append("password",password);
    formData.append("ops_type","insert");
    let url = webserviceBaseUrl+webserviceAppUrl+webserviceUserEndpoint;
    fetch(url,{
      method : 'POST',
      body : formData
    }).then(res=>{
      console.log(res);
      return res.text(); // this is promise , will resolve response text
    })
    .then(data=>{
      console.log("register : return data  is ");
      console.log(data);
      try{
        data = JSON.parse(data);
      }
      catch(error){
        console.log("register : error in parsing");
        data = {};
      }
      console.log(data);
      // set user data 
      setTimeout(function(){
        if(data.status === true ){
          setInternalLink('');
          setBackdropText('Register Success');
        }else{
          setBackdropText('Register Fail');
        }
        setTimeout(function(){
          setBackdrop(false);
        },1000);
      },2000);
    })
    .catch(err => {
      console.log("Register : network error");
      console.log(err);setTimeout(function(){
        setBackdropText('Register : Network Error');
        setTimeout(function(){
          setBackdrop(false);
        },2000);
      },2000);
    })
  }

  const update = ({id,email,username,password,role}) =>{
    // login operation
    // setUser on success / fail
    
    //setInternalLink('myaccount');
    setBackdrop(true);
    setBackdropText('Data Updating...');
    console.log("update is calling.."); 
    let formData = new FormData();
    
    if(id === "" || id === undefined) {
      alert("id has to be provided");
      return;
    }
    formData.append("id",id);

    if(email === "" || email === undefined) {
      
    } 
    else {
      formData.append("email",email);
    }
    if(username === "" || username === undefined) {
      
    } 
    else {
      formData.append("username",username);
    }
    if(password === "" || password === undefined) {
      
    } 
    else {
      formData.append("password",password);
    }
    if(role === "" || role === undefined) {
      
    } 
    else {
      formData.append("role",role);
    }

    
    
    formData.append("ops_type","update");
    let url = webserviceBaseUrl+webserviceAppUrl+webserviceUserEndpoint;
    fetch(url,{
      method : 'POST',
      body : formData
    }).then(res=>{
      console.log(res);
      return res.text(); // this is promise , will resolve response text
    })
    .then(data=>{
      console.log("update : return data  is ");
      console.log(data);
      try{
        data = JSON.parse(data);
      }
      catch(error){
        console.log("update : error in parsing");
        data = {};
      }
      console.log(data);
      // set user data 
      setTimeout(function(){
        if(data.status === true ){
          let updateUsers = users.map((user)=>{
            if(user.id == data.data.id){
              user = data.data;
            }
            return user;
          });
          
            
          let i = 1;
          let dataTemp = updateUsers.map((d)=>{
            d.serial_no = i++;
            return d;
          });
          setUsers(dataTemp);
          setInternalLink('');
          setInternalLink('/main');
          setBackdropText('update Success');
        }else{
          setBackdropText('update Fail');
        }
        setTimeout(function(){
          setBackdrop(false);
        },1000);
      },2000);
    })
    .catch(err => {
      console.log("Register : network error");
      console.log(err);setTimeout(function(){
        setBackdropText('Register : Network Error');
        setTimeout(function(){
          setBackdrop(false);
        },2000);
      },2000);
    })
  }
  const editUser = (id) =>{
    console.log("editUser "+id);
    let nowUser = users.filter((user)=>{
      return user.id === id;
    });
    console.log(nowUser[0]);
    setCurrentEditUser(nowUser[0]);
  }
  const deleteUser = (id) =>{
    console.log("deleteUser id "+id);
    let nowUser = users.filter((user)=>{
      return user.id === id;
    });
    console.log(nowUser[0]);

    var r = window.confirm("Are you sure to delete "+nowUser[0].username);
    if (r === true) {
      console.log("delete user "+nowUser[0].username);

      //txt = "You pressed OK!";
      
      setBackdrop(true);
      setBackdropText('Deleting...');
      console.log("deleteUser is calling.."); 
      let formData = new FormData();
      if(id === "" || id === undefined) {
        alert("id has to be provided");
        return;
      }
      formData.append("id",id);
      formData.append("jwt","thisIsJwt");
      formData.append("ops_type","delete");
      let url = webserviceBaseUrl+webserviceAppUrl+webserviceUserEndpoint;
      fetch(url,{
        method : 'POST',
        body : formData
      }).then(res=>{
        console.log(res);
        return res.text(); // this is promise , will resolve response text
      })
      .then(data=>{
        console.log("delete : return data  is ");
        console.log(data);
        try{
          data = JSON.parse(data);
        }
        catch(error){
          console.log("userDelete : error in parsing");
          data = {};
        }
        console.log(data);
        // set user data 
        setTimeout(function(){
          if(data.status === true ){
            let updateUsers = users.filter((user)=>{
              return user.id !== id
            });
            
          let i = 1;
          let dataTemp = updateUsers.map((d)=>{
            d.serial_no = i++;
            return d;
          });
          setUsers(dataTemp);

            //setUsers(updateUsers);
            //setInternalLink('');
            //setInternalLink('/main');
            setBackdropText('delete Success');
          }else{
            setBackdropText('Delete Fail');
          }
          setTimeout(function(){
            setBackdrop(false);
          },1000);
        },2000);
      })
      .catch(err => {
        console.log("Register : network error");
        console.log(err);setTimeout(function(){
          setBackdropText('Register : Network Error');
          setTimeout(function(){
            setBackdrop(false);
          },2000);
        },2000);
      })

      
    } else {
      console.log("cancel");
      //txt = "You pressed Cancel!";
    }
  }
  const selectAllUser = ({limit,last_id}) =>{
    // login operation
    // setUser on success / fail
    
    setInternalLink('main');
    setBackdrop(true);
    setBackdropText('Getting user list from server...');
    console.log("selectAllUser is calling.."); 
    let formData = new FormData();
    formData.append("jwt",user.jwt);
    formData.append("limit",limit);
    formData.append("last_id",last_id);
    formData.append("ops_type","select");
    let url = webserviceBaseUrl+webserviceAppUrl+webserviceUserEndpoint;
    fetch(url,{
      method : 'POST',
      body : formData
    }).then(res=>{
      console.log(res);
      return res.text(); // this is promise , will resolve response text
    })
    .then(data=>{
      console.log("selectAllUser : return data  is ");
      console.log(data);
      try{
        data = JSON.parse(data);
      }
      catch(error){
        console.log("selectAllUser : error in parsing");
        data = {};
      }
      console.log(data);
      // set user data 
      setTimeout(function(){
        if(data.status === true ){
          // loop through 
          // set users 
          let i = 1;
          let dataTemp = data.data.map((d)=>{
            d.serial_no = i++;
            return d;
          });
          setUsers(dataTemp);
          localStorage.setItem("users",JSON.stringify(dataTemp));
          setBackdropText('Select data success');
        }else{
          setBackdropText('Username and password do not match!');
        }
        setTimeout(function(){
          setBackdrop(false);
        },1000);
      },2000);
    })
    .catch(err => {
      console.log("network error");
      console.log(err);setTimeout(function(){
        setBackdropText('Network Error');
        setTimeout(function(){
          setBackdrop(false);
        },2000);
      },2000);
    })
  }

  
  const closeDialogOk = () =>{
    let obj = {status:false,title:"Title",content:'Content'};
    setDialogOkState(obj);
  }
  const openDialogOk = ({title,content}) =>{
    let obj = {status:true,title,content};
    setDialogOkState(obj);
  }
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor,logout) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText>
            <ReactLink to="myaccount"  style={{textDecoration:"none"}}>My Account</ReactLink>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>
            <ReactLink to="aboutapp"  style={{textDecoration:"none"}}>About App</ReactLink>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>
            <ReactLink to=""  style={{textDecoration:"none"}} onClick={logout}>Logout</ReactLink>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

const logout = () =>{
  console.log("logout");
  localStorage.removeItem('user');
  localStorage.removeItem('users');
}
      useEffect ( ()=>{
        // initialization phase 
        console.log("useEFfect");

        // get login satus
        let userData = localStorage.getItem('user');
        console.log(userData);
        if(userData == undefined){
          console.log("userData is undefined");
        }
        else{
          userData = JSON.parse(userData);
          setUser(userData);
          let usersData = JSON.parse(localStorage.getItem('users'));
          setUsers(usersData);
          setInternalLink('/main');
          let limit = 0;
          let last_id = 0;
          selectAllUser({limit,last_id});
        }
      
      },{});
  return (
    <Router>
      <div className="App">
        
      <Backdrop className={classes.backdrop} open={backdrop}>
        
        <div>
          <p>{backdropText}</p>
          <CircularProgress color="inherit" />
        </div>
        
      </Backdrop>
      <DialogOk dialogOkState={dialogOkState} closeDialogOk={closeDialogOk}/>


        <Redirect to={internalLink} push={true} />

        <Switch>
          <Route path="/main" exact>
            <div  className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon onClick={toggleDrawer('left', true)}/>
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    Multicontent Management
                  </Typography>
                  <MoreVertIcon  className={classes.floatRight} onClick={handleClick}/>
                </Toolbar>
              </AppBar>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <ReactLink to="share" style={{textDecoration:"none"}}>Share</ReactLink>
                </MenuItem>
              </Menu>
              
              <div>
                {['left'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                      {list(anchor,logout)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>

            </div>
          
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.serial_no}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <ReactLink to={`/user/edit/${user.id}`}  style={{textDecoration:"none"}}>
                          <EditIcon onClick={() =>{editUser(user.id)}}/>
                        </ReactLink>
                      </TableCell>
                      <TableCell>
                        
                         <DeleteIcon onClick={() =>{deleteUser(user.id)}} />
                         
                      </TableCell>
                    </TableRow>
                  ))}

                </TableBody>
              </Table>
            </TableContainer>

            
            This is main Page
            <ul>
              <li>App Bar menu icon </li>
              <li>List User in card with edit and delete button</li>
            </ul>
          </Route>
          <Route path="/signup" exact>
            <Title title="Sign Up"/>
            <SignUpForm register={register} />
          </Route>
          <Route path="/forgetpassword" exact>
            <Title title="Forget password" />
            <ForgetPasswordForm />
          </Route>
          <Route path="/404" exact>
            <Title title="Requested page is not available" />
          </Route>
          <Route path="/myaccount" exact>
            <Title title="My Account" />
            <MyAccountForm user={user} update={update} setUser={setUser} />
          </Route>
          <Route path="/aboutapp" exact>
            <Title title="About App"/>
            <AboutApp />
          </Route>
          <Route path="/" exact>
            <Title title="Login"/>
            <LoginForm  login={login}  />
          </Route>
          <Route path="/usersection" exact>
            <Title title="User Section"></Title>
            <UserSection />
          </Route>
          <Route path="/user/edit/:id" exact>
            <Title title="User Edit"/>
            <UserEditForm user={currentEditUser} update={update} />
          </Route>
          
          <Route>
            <Title title="Requested page is not available" />
            This is 404 section
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
