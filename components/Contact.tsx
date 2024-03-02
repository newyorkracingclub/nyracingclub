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
    <div>
      <section className="mx-auto max-w-screen-xl">
        <div className="flex w-full">
          <div>
            <p className="font-semibold tracking-tighter text-xl md:text-4xl">
              CONTACT <span className="font-light">US</span>
            </p>
          </div>
        </div>

        <div className="basis-1/2 mt-4">
          <form
            onSubmit={onSubmit}
            action="https://formsubmit.co/ffbcc01b93ce95dc2fea26f095ce96d0"
            method="POST"
          >
            <input
              className="w-full rounded-md bg-blue font-light tracking-tighter placeholder-gray-500 text-white p-3"
              type="text"
              placeholder="NAME"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-blue font-semibold mt-1">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className="w-full rounded-md bg-blue font-light tracking-tighter placeholder-gray-500 text-white p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-blue font-semibold mt-1">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}
            <textarea
              className="w-full rounded-md bg-blue font-light tracking-tighter placeholder-gray-500 text-white p-3 mt-5"
              placeholder="MESSAGE"
              rows={7}
              cols={50}
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-blue font-semibold mt-1">
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 char.'}
              </p>
            )}
            <input
              type="hidden"
              name="_next"
              value="https://nyracing.vercel.app/thankyou"
            />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for your message!"
            />
            <button
              className="p-3 rounded-md font-light tracking-tighter bg-blue hover:text-gray-500 mt-3 text-white transition duration-500"
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
