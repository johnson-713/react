import { useForm } from "react-hook-form"



function Home() {
  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }


  // const {count, setCount} = useContext(AppContext)
  // console.log(count)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First Name" {...register('firstname', {required: "First name is required"})} />
        {errors?.firstname && (
          <p className="text-danger">{errors?.firstname?.message}</p>
        )}
        <input type="submit" />
      </form>
    </div>

  )
}

export default Home