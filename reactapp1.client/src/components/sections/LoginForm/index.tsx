import React, {useCallback} from 'react'
import {Input} from '@progress/kendo-react-inputs'
import {Button} from '@progress/kendo-react-buttons'
import {Label, Error} from '@progress/kendo-react-labels'
import {FieldWrapper} from '@progress/kendo-react-form'
import {BoEye, BoEyeClosed} from "solar-icon-react/bo";
import {Controller, useForm} from "react-hook-form";
import * as z from 'zod'
import {LoginSchema} from "../../../utils/validations/loginSchema";
import {zodResolver} from '@hookform/resolvers/zod'
import {Card, CardBody, CardHeader} from "@progress/kendo-react-layout";
import {useLogin} from "../../../hooks";

type ILoginForm = z.infer<typeof LoginSchema>
export default function LoginForm() {
    const [show, setShow] = React.useState(false)
    
    const {control, register, formState: {errors}, handleSubmit} = useForm<ILoginForm>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

            const onSubmit = async (val: ILoginForm) => {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(val),
                })
                const data = response.ok
                if (!response.ok) {
                    console.error(response.statusText)
                }
                console.info(data)
            };

            const toggleShow = () => setShow((prev) => !prev)
            return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <form style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <CardHeader style={{display: 'flex', justifyContent: 'center'}}>
                        <p style={{fontWeight: 'bolder'}}>Login Form</p>
                    </CardHeader>
                    <CardBody>
                        <FieldWrapper>
                            <Label>
                                Username
                            </Label>
                            <div className={'k-form-field-wrap'} style={{ position: 'relative' }}>
                                <Controller
                                    name="username"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.value)}
                                            type='text'
                                            placeholder='Username'
                                        />
                                    )}
                                />
                                {errors.username && (
                                    <Error>{errors.username.message}</Error>
                                )}
                            </div>
                        </FieldWrapper>
                        <FieldWrapper style={{marginTop: 10}}>
                            <Label>
                                Password
                            </Label>
                            <div className={'k-form-field-wrap'} style={{ position: 'relative' }}>
                                <Controller 
                                    name="password"
                                    control={control}
                                    render={({field}) => (
                                        <div style={{position: 'relative'}}>
                                            <Input
                                                value={field.value}
                                                onChange={(e) => field.onChange(e.value)}
                                                type={show ? 'text' : 'password'}
                                                placeholder='Password'
                                                style={{ paddingRight: 40 }}
                                            />
                                            <span
                                                onClick={toggleShow}
                                                style={{
                                                    position: 'absolute',
                                                    right: 10,
                                                    top: 7,
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                {show ? <BoEyeClosed width={20} /> : <BoEye width={20} />}
                                            </span>
                                        </div>    
                                    )}
                                />
                                {errors.password && (
                                    <Error>{errors.password.message}</Error>
                                )}
                            </div>
                        </FieldWrapper>
                        <Button style={{marginTop: 10, width: '100%' }} themeColor='primary' type="submit">Login</Button>
                    </CardBody>
                </Card>
            </form>
        </div>
    )
}   