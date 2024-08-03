'use client';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (e: React.FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex justify-center">
      <section aria-labelledby="contact-heading">
        <div>
          <p
            id="contact-heading"
            className="font-semibold tracking-tighter text-xl md:text-4xl"
          >
            CONTACT <span className="font-light">US</span>
          </p>
        </div>

        <div className="mt-4 md:w-[85vw] xl:w-[50vw]">
          <form
            onSubmit={onSubmit}
            action="https://formsubmit.co/ffbcc01b93ce95dc2fea26f095ce96d0"
            method="POST"
            aria-describedby="contact-form-info"
          >
            <p id="contact-form-info" className="sr-only">
              Please fill out the form below to get in touch with us.
            </p>

            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              className="w-full rounded-md bg-blue font-light tracking-tighter placeholder-gray-500 text-white p-3"
              type="text"
              placeholder="NAME"
              aria-required="true"
              {...register('name', {
                required: 'This field is required.',
                maxLength: {
                  value: 100,
                  message: 'Name cannot exceed 100 characters.',
                },
              })}
            />
            {errors.name && (
              <p className="text-blue font-semibold mt-3 w-full">
                {errors.name.message}
              </p>
            )}

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              className="w-full rounded-md bg-blue font-light tracking-tighter placeholder-gray-500 text-white p-3 mt-3"
              type="email"
              placeholder="EMAIL"
              aria-required="true"
              {...register('email', {
                required: 'This field is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address.',
                },
              })}
            />
            {errors.email && (
              <p className="text-blue font-semibold mt-3 w-full">
                {errors.email.message}
              </p>
            )}

            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              className="w-full rounded-md bg-blue font-light tracking-tighter placeholder-gray-500 text-white p-3 mt-3"
              placeholder="MESSAGE"
              rows={7}
              aria-required="true"
              {...register('message', {
                required: 'This field is required.',
                maxLength: {
                  value: 2000,
                  message: 'Message cannot exceed 2000 characters.',
                },
              })}
            />
            {errors.message && (
              <p className="text-blue font-semibold w-full mt-1 mb-2">
                {errors.message.message}
              </p>
            )}

            <input
              type="hidden"
              name="_next"
              value="https://nyracing.org/thankyou"
            />
            <button
              className="p-3 rounded-md font-bold tracking-tighter bg-blue hover:bg-sky-300 mt-1 text-white transition duration-200"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
