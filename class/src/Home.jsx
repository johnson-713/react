import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <input
          className={`rounded ${errors.firstname ? 'border-danger' : ''}`}
            type="text"
            placeholder="First Name"
            {...register("firstname", {
              required: "First name is required",
              maxLength: 10,
            })}
          />
          {errors?.firstname && (
            <p className="text-danger">{errors?.firstname?.message}</p>
          )}
        </Container>
        <Container>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastname", {
              required: "Last name is required",
              maxLength: 10,
            })}
          />
          {errors?.lastname && (
            <p className="text-danger">{errors?.lastname?.message}</p>
          )}
        </Container>
        <Container>
          <input
            type="number"
            placeholder="Phone Number"
            {...register("phonenumber", { required: true, min: 10 })}
          />
          {errors.phonenumber && (
            <p className="text-danger">Phone number must be 10 digits</p>
          )}
        </Container>
        <Container>
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            })}
          />
          {errors.email && <p className="text-danger">Email must be valid</p>}
        </Container>
        <Container>
          <input type="submit" />
        </Container>
      </form>
    </div>
  );
}

export default Home;
