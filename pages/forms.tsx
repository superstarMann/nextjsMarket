import { FieldError, useForm } from "react-hook-form"

interface LoginForm{
    username: string;
    password: string;
    email: string;
}

export default function Forms() {
    const {register, handleSubmit} = useForm<LoginForm>();
    const onValid = (data: LoginForm) => {
        console.log('hi')
    }
    const onInvalid = (errors: FieldError) => {
        console.log(errors);
    }   
        return(
        <form onSubmit={handleSubmit(onValid)}>
            <input {...register("username")} type="text" placeholder="Username" required/>
            <input {...register("email")} type="email" placeholder="Email" required/>
            <input {...register("password")} type="password" placeholder="Password" required/>
            <input type="submit" value="Create Account" required/>
        </form>
    )
}