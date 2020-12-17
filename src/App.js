import React, { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar'
import './App.css'

function App() {
  // const [currentTheme, setCurrentTheme] = useState('dark')

  // useEffect(() => {
  //   const theme = localStorage.getItem('theme')

  //   if (theme) {
  //     setCurrentTheme(theme)
  //   }
  // }, [])

  // const toggleTheme = async (e) => {
  //   const selectedTheme = e.target.id
  //   const solarBtn = document.querySelector('#solar')
  //   if (currentTheme.includes('solar') && selectedTheme === 'solar') {
  //     const updatedTheme = currentTheme.replace(' solar', '')
  //     solarBtn.innerText = 'Solarize'
  //     solarBtn.style.cssText = `
  //       --bg-solar: var(--yellow);
  //     `
  //     setCurrentTheme(updatedTheme)
  //     localStorage.setItem('theme', updatedTheme)
  //   } else if (!currentTheme.includes('solar') && selectedTheme === 'solar') {
  //     solarBtn.innerText = 'Normalize'
  //     solarBtn.style.cssText = `
  //       --bg-solar: white;
  //     `
  //     setCurrentTheme((current) => current + ' solar')
  //     localStorage.setItem('theme', currentTheme + ' solar')
  //   } else {
  //     setCurrentTheme(selectedTheme)
  //     localStorage.setItem('theme', selectedTheme)
  //   }
  // }

  return (
    <div className='App'>
      <NavBar />

      <main>
        <h1>CSS is Cool</h1>

        <p>
          I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo
          quinoa iceland normcore tumeric. Kitsch coloring book retro, seitan
          schlitz tattooed biodiesel vexillologist neutra. Synth mumblecore deep
          v, umami selfies normcore gluten-free snackwave. Seitan ramps drinking
          vinegar venmo keytar, humblebrag VHS post-ironic tacos godard
          pour-over.
        </p>
        <p>
          Sartorial kogi taxidermy, kickstarter synth yr irony ennui everyday
          carry retro helvetica stumptown cloud bread squid echo park. Etsy
          cloud bread sartorial quinoa tacos beard mumblecore shaman tumblr
          pop-up. Twee retro fingerstache af helvetica pabst 8-bit leggings
          taiyaki portland ramps tbh tumblr vinyl. Neutra humblebrag bushwick
          portland subway tile plaid, offal scenester flexitarian cliche squid
          small batch palo santo. Palo santo meh adaptogen +1 3 wolf moon,
          listicle brunch ethical fanny pack everyday carry fam. Offal
          fingerstache taxidermy, man bun venmo PBR&amp;B helvetica thundercats
          everyday carry tote bag artisan cray wolf jianbing.
        </p>
      </main>
    </div>
  )
}

export default App
