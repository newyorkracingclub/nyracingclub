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
      <section>
        <div>
          <p className="font-semibold tracking-tighter text-xl md:text-4xl">
            CONTACT <span className="font-light">US</span>
          </p>
        </div>

        <div className="mt-4 md:w-[85vw] xl:w-[50vw]">
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
              <p className="text-blue font-semibold mt-3 w-full">
                {errors.name.type === 'required' && 'This field is required.'}
              </p>
            )}

            <input
              className="w-full rounded-md bg-blue font-light tracking-tighter placeholder-gray-500 text-white p-3 mt-3"
              type="text"
              placeholder="EMAIL"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-blue font-semibold mt-3 w-full">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}
            <textarea
              className="w-full rounded-md bg-blue font-light tracking-tighter placeholder-gray-500 text-white p-3 mt-3"
              placeholder="MESSAGE"
              rows={7}
              cols={50}
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-blue font-semibold w-full mt-1 mb-2">
                {errors.message.type === 'required' &&
                  'This field is required.'}
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
