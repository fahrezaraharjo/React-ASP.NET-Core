import React, { useState } from 'react'
import { Input } from '@progress/kendo-react-inputs'
import { Button } from '@progress/kendo-react-buttons'
import { Label, Error } from '@progress/kendo-react-labels'
import { FieldWrapper } from '@progress/kendo-react-form'
import { BoEye, BoEyeClosed } from "solar-icon-react/bo"
import { Controller, useForm } from "react-hook-form"
import * as z from 'zod'
import { LoginSchema } from "../../../utils/validations/loginSchema"
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardBody, CardHeader } from "@progress/kendo-react-layout"
import bgImage from '../../../assets/bgLogin.png'
import CustomKendoButton from '../../CustomButton'
import { useLogin } from '../../../hooks/useLogin'


type LoginResponse = {
    status: number
    message: string
    data: string
}

type ILoginForm = z.infer<typeof LoginSchema>

export default function LoginForm() {
    const [show, setShow] = useState(false)
    const {
        control,
        formState: { errors },
        handleSubmit,
        setError,
    } = useForm<ILoginForm>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    })
    const loginMutation = useLogin(setError)
    const onSubmit = (values: ILoginForm) => {
        loginMutation.mutate(values)
    }
    const toggleShow = () => setShow(prev => !prev)
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
        }}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    width: '100%',
                    maxWidth: 400
                }}
            >
                <Card style={{
                    padding: 20,
                    borderRadius: 16,
                    background: 'rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    color: '#fff',
                }}>
                    <CardHeader style={{ justifyContent: 'center', display: 'flex' }}>
                        <h2 style={{ margin: 0, fontWeight: 700, fontSize: 22 }}>Login</h2>
                    </CardHeader>

                    <CardBody>
                        <FieldWrapper>
                            <Label style={{ marginBottom: 5 }}>Username</Label>
                            <div className="k-form-field-wrap" style={{ position: 'relative' }}>
                                <Controller
                                    name="username"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.value)}
                                            type="text"
                                            placeholder="Enter your username"
                                        />
                                    )}
                                />
                                {errors.username && <Error>{errors.username.message}</Error>}
                            </div>
                        </FieldWrapper>

                        <FieldWrapper style={{ marginTop: 20 }}>
                            <Label style={{ marginBottom: 5 }}>Password</Label>
                            <div className="k-form-field-wrap" style={{ position: 'relative' }}>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => (
                                        <div style={{ position: 'relative' }}>
                                            <Input
                                                value={field.value}
                                                onChange={(e) => field.onChange(e.value)}
                                                type={show ? 'text' : 'password'}
                                                placeholder="Enter your password"
                                                style={{ paddingRight: 40 }}
                                            />
                                            <span
                                                onClick={toggleShow}
                                                style={{
                                                    position: 'absolute',
                                                    right: 10,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {show ? <BoEyeClosed width={20} /> : <BoEye width={20} />}
                                            </span>
                                        </div>
                                    )}
                                />
                                {errors.password && <Error>{errors.password.message}</Error>}
                            </div>
                        </FieldWrapper>

                        <CustomKendoButton
                            label={loginMutation.isPending ? 'Logging in...' : 'Login'}
                            align="center"
                            style={{
                                marginTop: 30,
                                width: '100%',
                                fontWeight: 600,
                                padding: '10px 0',
                                backgroundColor: '#28a745',  // hijau
                                color: '#fff',
                                borderRadius: 8,
                                border: 'none',
                            }}
                            onClick={handleSubmit(onSubmit)}
                        />
                    </CardBody>
                </Card>
            </form>
        </div>
    )
}
