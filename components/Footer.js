import React from "react"

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It is a pretty amazing clone though</p>
        <p>Referrals accepted</p>
        <p>Grimmyxiii</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Grimmyxiii Next.js</p>
        <p>Presents</p>
        <p>A website of a website</p>
        <p>Made with love....and coffee</p>
        <p>....lots of coffee</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say HI to Finley and Jesse</p>
        <p>They are the 2 best dogs in the world</p>
        <p>And they love to cuddle</p>
      </div>
    </div>
  )
}

export default Footer
