/* eslint-disable react/no-unescaped-entities */
const Education = () => {
  return (
    <div className="p-5">
      <h1 className="font-neue text-2xl md:text-4xl text-center">
        Educational Qualification
      </h1>

      <section className="bg-zinc-800 md:m-5 m-2 mt-4 p-5 rounded-md">
        <h1 className="md:text-2xl text-xl font-semibold">
          Higher Secondary Certificates
        </h1>
        <p className="text-highlight-btn">Bahubal Honour's College</p>
        <hr className="border-zinc-700 my-2" />
        <p>
          Subject: <span className="font-semibold text-zinc-200">Science</span>
        </p>
        <p>
          Passing Year: <span className="font-semibold">2021</span>
        </p>
      </section>

      <section className="bg-zinc-800 md:m-5 m-2 p-5 rounded-md">
        <h1 className="md:text-2xl text-xl font-semibold">
          Bachelor of Science Honours
        </h1>
        <p className="text-highlight-btn">Metropolitan University, Sylhet</p>
        <hr className="border-zinc-700 my-2" />
        <p>
          Subject:{" "}
          <span className="font-semibold text-zinc-200">
            Computer Science & Engineering
          </span>
        </p>
        <p>
          Status: <span className="font-semibold">3rd semester (2:1)</span>
        </p>
      </section>
    </div>
  );
};

export default Education;
