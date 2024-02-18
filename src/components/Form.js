import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Name is required"),
        email: yup.string().email().required("Email is required"),
        age: yup.number().positive().integer().min(18).required("Age is required"),
        password: yup.string().min(8).max(20).required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password don't match").required("Confirm Password is required"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register("fullName")} />
                <p>{errors.fullName?.message}</p>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />
                <p>{errors.email?.message}</p>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" {...register("age")} />
                <p>{errors.age?.message}</p>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")}/>
                <p>{errors.password?.message}</p>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" {...register("confirmPassword")}/>
                <p>{errors.confirmPassword?.message}</p>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}