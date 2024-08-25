const TimeLine = () => {
  return (
    <ul className="timeline timeline-vertical lg:timeline-horizontal -ml24">
      <li>
        <div className="timeline-end">2018</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start timeline-box max-w-72">
          <h1 className="font-bold">Launch of the Platform</h1>
          <p>
            We started with a simple idea: to make bike rentals accessible and
            convenient for everyone. In 2018, Bike Breeze was officially
            launched with a small fleet of bikes and a mission to promote
            eco-friendly transportation.
          </p>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start">2019</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box max-w-72">
          <h1 className="font-bold">Expansion to Major Cities</h1>
          <p>
            With growing demand, we expanded our operations to cover major
            cities across the country. By the end of 2019, we had increased our
            bike fleet and established partnerships with local bike shops to
            ensure availability and quality.
          </p>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-end">2020 </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start  timeline-box max-w-72">
          <h1 className="font-bold">Reaching 10,000 Rentals</h1>
          <p>
            In 2020, we celebrated a significant milestone—10,000 rentals! This
            achievement was a testament to our commitment to customer
            satisfaction and our growing popularity among urban commuters and
            tourists alike.
          </p>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start">2022</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end  timeline-box max-w-72">
          <h1 className="font-bold">Launch of Mobile App</h1>
          <p>
            To enhance user experience, we introduced a mobile app in 2022,
            allowing customers to book bikes on the go. The app quickly became a
            favorite among our users, making the rental process even more
            seamless and efficient.
          </p>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-end">2023</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start  timeline-box max-w-72">
          <h1 className="font-bold">Expansion to Major Cities</h1>
          <p>
            In 2023, we were honored to be recognized as a leading bike rental
            platform, receiving accolades for our innovation and customer
            service. This year also saw the opening of our new headquarters and
            the introduction of premium bike models to our fleet.
          </p>
        </div>
      </li>
    </ul>
  );
};
export default TimeLine;
