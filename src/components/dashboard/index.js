import React, {Component, useContext, useEffect, useState} from 'react'
import { UserContext} from "../../providers/UserProvider";
import {useHistory} from "react-router-dom";
import { Form, Input, Button, Checkbox ,Row,Col} from 'antd';

import {logOut} from "../../service/firebase";

const Dashboard =()=>{
    const user = useContext(UserContext)
    const history=useHistory()
    useEffect(()=>{
        if(!user){
            history.push('/')
        }
    },[user])

    const logOutHandler =()=>{
        logOut();
        alert('Logout Successfully');
    }
    return(
        <>
            <Row>
                <Col span={24} style={{background:'black',color:'white',padding:'10px'}}>
                    Thanks for Login
                </Col>
                <Col span={24} style={{background:'black',color:'white',padding:'10px'}}>Name : {user ? user.name : ''}</Col>
                <Col span={24} style={{background:'black',color:'white',padding:'10px'}}>
                    <img style={{borderRadius:'100px'}} src={user ? user.imgUrl :''}/>
                </Col>
                <Col span={24} style={{background:'black',color:'white',padding:'10px'}}>
                    <Button style={{color:'white',background:'black' ,padding:'5px'}} onClick={logOutHandler}> Logout</Button>
                </Col>
            </Row>
        </>
    );
}
export  default Dashboard;