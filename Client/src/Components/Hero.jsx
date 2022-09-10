import React from 'react';

const Hero = () => {
  return (
    <div className=" dark:bg-gray-800 dark:text-gray-100">
      <div className="px-6 space-y-8">
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 dark:bg-gray-900">
            <h2 className="text-5xl font-bold dark:text-gray-50">
              Reminders Application
            </h2>
            <p className="dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              facilis quod accusantium beatae cum nam adipisci reiciendis omnis
              possimus error quo animi voluptas magni, at incidunt. Nulla ex at
              ullam corporis quidem adipisci vitae, perferendis dolorem libero
              minus atque tenetur enim pariatur cupiditate commodi in beatae,
              ipsa eligendi? Quis, saepe.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
