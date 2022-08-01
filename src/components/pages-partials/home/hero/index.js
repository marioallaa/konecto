import CompanyBanners from '@/components/common/company-banners'
import { Tile2, Tile3, Tile4 } from '@/components/common/svgs'
import { ChevronRightIcon } from '@heroicons/react/solid'
import NextLink from 'next/link'

const companies = [
  { id: 1, name: 'Tuple', logo: Tile3, url: '#' },
  { id: 2, name: 'Workation', logo: Tile4, url: '#' },
  { id: 3, name: 'StaticKit', logo: Tile2, url: '#' },
]

const HeroSection = () => {
  
  
        let button = document.getElementById('checkBtn')
        let field = document.getElementById('username')
        console.log(button, field)


        button.oninput = function() {
            field.value = field.value.replace(/\s/g, '');
            field.value = field.value.replace(/[^A-Za-z0-9_]/g, '');
            field.value = field.value.toLowerCase()
            document.getElementById('label').textContent = "Check"
            document.getElementById('msg').classList.add('sr-only')
        }

        button.onclick = function(e) {
            e.preventDefault()
            document.getElementById('btnLoading').classList.remove('sr-only')
            document.getElementById('label').classList.add('sr-only')
            console.log(field.value)
            fetch(`https://api.ogier.io/profile/check/${field.value}`).then(r => r.json()).then(v => {
                console.log(v)
                document.getElementById('btnLoading').classList.add('sr-only')
                if (v.available) {
                    window.location.href = 'https://app.ogier.io/continue/profile/' + field.value
                } else {
                    document.getElementById('label').textContent = "Check"
                    document.getElementById('msg').textContent = "Username not available, please try again!"
                    document.getElementById('label').classList.remove('sr-only')
                    document.getElementById('msg').classList.remove('sr-only')
                }
            });
        }
  
  
  return (
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center lg:z-50">
            <div className="lg:py-24">
              <NextLink href="#">
                <a className="inline-flex items-center p-1 pr-2 text-white bg-gray-900 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                  <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-primary rounded-full">
                    Claim Your Profile
                  </span>
                  <span className="ml-4 text-sm">Join for free</span>
                  <ChevronRightIcon
                    className="w-5 h-5 ml-2 text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </NextLink>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Level up your</span>
                <span className="block pb-3 text-gradient-primary sm:pb-5">
                  Personal Brand
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                Share and cross promote your links, music, videos, social media,
                and more on one page.
              </p>
              <div className="mt-10">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="flex-1 min-w-0">
                      <label htmlFor="email" className="block mb-3">
                        Check username availability now!!!
                      </label>
                      <input
                        id="username"
                        type="text"
                        placeholder="konecto.me/karen-daily"
                        className="input-main input-dark"
                      />
                    </div>
                    <div className="self-end mt-3 sm:mt-0 sm:ml-3">
                      <button id="checkBtn" type="submit" className="btn-gradient btn-thick">
                        Check
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    We care about the protection of your data. Read our
                    <NextLink href="#">
                      <a className="font-medium text-blue-500">
                        {' '}
                        Privacy Policy
                      </a>
                    </NextLink>
                    .
                  </p>
                </form>
                <div className="mt-10">
                  <span className="text-sm font-semibold uppercase">
                    Powered by
                  </span>
                  <span className="flex">
                    <CompanyBanners companies={companies} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full mix-blend-lighten lg:scale-[2.4]"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
