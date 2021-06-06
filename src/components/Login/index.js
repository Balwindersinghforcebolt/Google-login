import React, {useContext, useEffect,useState} from 'react';

import { Form, Input, Button, Checkbox ,Row,Col} from 'antd';
import {GoogleOutlined } from '@ant-design/icons'
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'
import { signInWithGoogle } from '../../service/firebase';
import {UserContext} from "../../providers/UserProvider";
import {useHistory} from 'react-router-dom'
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span: 24,
    },
};
const LoginForm =(props)=>{
    const history=useHistory()
    const user = useContext(UserContext);
    const [redirect,setRedirect] = useState(null);
    useEffect(()=>{
        if(user){
            setRedirect('/dashboard');
            console.log('user--- in useEfffect->',user)
        }
    },[user]);
    if(redirect){
        history.push('/dashboard');
        console.log('redirect---->',redirect)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    //
    // const responseGoogle = (response) => {
    //     // console.log(response);
    //
    //     if(response && response.profileObj && response.profileObj.email){
    //         // setUserData(response.profileObj);
    //         console.log('User data----->',response.profileObj);
    //         props.history.push('/dashboard');
    //     }
    //
    // }
    const loginHandler =()=>{
        signInWithGoogle();

    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <Row>
            <Col span={24} style={{textAlign:'center' ,paddingTop:'30px',fontSize:'20px',fontWeight:600}}>Login</Col>

            <Col span={24} style={{textAlign:'center' ,paddingTop:'30px'}}>
            <Form
                style={{maxWidth:500,margin:'0 auto'}}
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            > <Row>
               <Col span={24}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
               </Col>
                <Col  span={24}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </Col>
        <Col span={24} style={{textAlign:'center'}}>Or login with</Col>
            <Col  span={24} style={{textAlign:'center'}}>
                {/*<GoogleLogin*/}
                {/*    clientId="237925480926-d22atls3u2ljhv91unmpsu897anib72v.apps.googleusercontent.com"*/}
                {/*    // buttonText="Login"*/}
                {/*    // onSuccess={responseGoogle}*/}
                {/*    // onFailure={responseGoogle}*/}
                {/*    cookiePolicy={'single_host_origin'}*/}
                {/*    */}
                {/*/>*/}


                <Button style={{borderRadius:'100%',marginTop:'5px'}} onClick={loginHandler}><GoogleOutlined /></Button>
            </Col>
    </Row>
    );
}

export  default  LoginForm;