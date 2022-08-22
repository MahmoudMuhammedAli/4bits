export default function TestimonialCard(props) {
  return (
    <div
      className="flex justify-center items-stretch grow flex-shrink-0 mx-7 min-w-[300px]
      bg-center transition-transform duration-200 ease-in-out
      sm:w-full md:w-6/12 lg:w-4/12 xl:w-2/12 2xl:w-1/12 max-h rounded-2xl hover:scale-[1.05]"
    >
      <figure className="snip1157 p-5 rounded-2xl">
        <blockquote className="text-md text-white">
          {props.comment}
          <div className="arrow"></div>
        </blockquote>
        <img src={props.image} alt="sq-sample3" />
        <div className="author">
          <h5>
            {props.ownerOfComment} <span> {props.companyName}</span>
          </h5>
        </div>
      </figure>
    </div>
  );
}
