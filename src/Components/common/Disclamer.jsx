import React from 'react'

function Disclaimer() {
  return (
    <div className=" z-[999] w-full">
      <div className="font-light bg-[#0685B1] p-2 overflow-hidden">
        <div className="inline-block text-center text-grey-100">
          <span className=" inline-block text-2xl">
            <div className="bg-[#008BB1]">
  <div className="text-center">
    <p className="text-white text-xs md:text-sm">
      This website is not affiliated with or endorsed by any government agency, including Medicare or any federal program. 
      We are a private service that connects consumers with licensed insurance providers. 
      <span className="block mt-2 font-semibold">
        We do not offer every plan available in your area. Currently we represent Conversion Matrix 360 organizations which offer 22 products in your area. 
        Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.
      </span>
    </p>
  </div>
</div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer