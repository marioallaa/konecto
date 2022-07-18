import Image from 'next/image'

const CommunitySection = () => {
  return (
    <div className="relative">
      <div className="sm:px-6 lg:px-8">
        <div className="relative px-4 py-16 min-h-[20rem] md:min-h-[32rem] sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <Image
            className="object-cover w-full h-full"
            src="/images/home/community.png"
            alt="People working on laptops"
            layout="fill"
          />
        </div>
      </div>
      <form action="#" className="mt-16 sm:max-w-xl sm:mx-auto ">
        <div className="text-center sm:flex">
          <div className="flex-1 min-w-0 px-4">
            <label htmlFor="email" className="block mb-3">
              Create your awesome konecto link-in-bio
            </label>
            <input
              id="email"
              type="email"
              placeholder="konecto.me/karen-daily"
              className="input-main input-dark"
            />
          </div>
          <div className="self-end mt-3 sm:mt-0 sm:ml-3">
            <button type="submit" className="btn-gradient btn-thick">
              Check
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CommunitySection
