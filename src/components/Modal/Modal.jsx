import Swal from 'sweetalert2'

export const Modal = (icon, title, text) => {
    return  (
        Swal.fire({
            icon: icon,
            title: title,
            text: text
        })
    )
}