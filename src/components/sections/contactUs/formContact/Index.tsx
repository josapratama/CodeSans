import Button from "../../../elements/Button";

const FormContact = () => {
  return (
    <section className="-translate-y-10 lg:-translate-y-28">
      <div className="container max-w-5xl px-4 lg:px-0">
        <form className="lg:py-[84px] py-10 lg:px-[220px] px-5 md:py-16 md:px-16 bg-third rounded-3xl">
          <div className="grid w-full grid-cols-2">
            <label
              htmlFor=""
              className="px-3 pb-6 text-base font-Poppins text-primary"
            >
              <h3 className="mb-[10px]">Name</h3>
              <input
                type="text"
                placeholder="David John"
                className="w-full py-[18px] px-5 border rounded-2xl border-secondary/50 placeholder:text-primary/50"
              />
            </label>
            <label
              htmlFor=""
              className="px-3 pb-6 text-base font-Poppins text-primary"
            >
              <h3 className="mb-[10px]">Email</h3>
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="w-full py-[18px] px-5 border rounded-2xl border-secondary/50 placeholder:text-primary/50"
              />
            </label>
          </div>
          <label
            htmlFor=""
            className="block px-3 pb-6 text-basefont-Poppins text-primary"
          >
            <h3 className="mb-[10px]">Subject</h3>
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full py-[18px] px-5 border rounded-2xl border-secondary/50 placeholder:text-primary/50"
            />
          </label>
          <label
            htmlFor=""
            className="block px-3 pb-6 text-basefont-Poppins text-primary"
          >
            <h3 className="mb-[10px]">Subject</h3>
            <textarea
              placeholder="Your Subject"
              className="w-full py-[18px] px-5 min-h-[294px] border rounded-2xl border-secondary/50 placeholder:text-primary/50"
            />

          </label>
            <Button
              type="submit"
              classname=" rounded-full py-3 px-10 min-w-[154px]"
            >
              Submit
            </Button>
        </form>
      </div>
    </section>
  );
};

export default FormContact;
