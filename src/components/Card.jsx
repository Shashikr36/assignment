import React, { memo } from 'react';

const Card = memo(({ user }) => {
  // Card component to display user information
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
      {/* left side */}
      <div className="w-full md:w-48 border-2 border-gray-300 p-2">
        <picture>
          {/* large image */}
          <source media="(min-width: 768px)" srcSet={user.picture.large} />
          {/* medium image */}
          <source media="(min-width: 480px)" srcSet={user.picture.medium} />
          {/* thumbnail image */}
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-l-lg"
            src={user.picture.thumbnail}
            alt={user.name.first}
            loading="lazy"
          />
        </picture>
      </div>
      {/* right side */}
      <div className="flex flex-col justify-between p-4 leading-normal">
        {/* name */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{user.name.first} {user.name.last}</h5>
        {/* gender */}
        <p className="mb-3 font-normal text-gray-700"><span className="font-bold">Gender:</span> {user.gender}</p>
        {/* phone */}
        <p className="mb-3 font-normal text-gray-700"><span className="font-bold">Phone:</span> {user.phone}</p>
      </div>
    </div>
  );
});

export default Card;
