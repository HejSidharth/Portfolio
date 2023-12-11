import React from 'react'

export default function Error() {
  return (
    <div className='mt-20'>
      <a href="#openModal" id="modalOpener"></a>

      <div id="openModal" className="modal">
        <div className="modal-content">
          <a href="#close" title="Close" className="close">X</a>
          <h2>Modal title</h2>
          <p>This is a sample modal box that can be created using the powers of CSS3.</p>
          <p>You could do a lot of things here like have a pop-up ad that shows when your website loads, or create a login/register form for users.</p>
        </div>
      </div>

      <script>
        document.getElementById('modalOpener').click();
      </script>
    </div>
  )
}