import React from 'react'

const Popup = () => {
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className=" btn btn-primary text-[0.7rem]" onClick={()=>document.getElementById('my_modal_3').showModal()}>View More</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Comming Soon</h3>
    <p className="py-4">Comming Soon</p>
  </div>
</dialog>
    </div>
  )
}

export default Popup