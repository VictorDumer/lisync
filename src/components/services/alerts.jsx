import Swal from "sweetalert2";

export const sucessoAlert = async (title) =>
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  }).fire({
    icon: "success",
    title: `${title} com sucesso`,
  });

export const deleteItemAlert = async () =>
  Swal.fire({
    title: "Você tem certeza que quer deletar?",
    text: "Você não conseguirá reverter isso!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, delete isso!",
  }).then((result) => {
    if (result.isConfirmed)
      Swal.fire({
        title: "Deletado!",
        text: "Sua tarefa foi deletada.",
        icon: "success",
      });
    return result.value;
  });

export const avisoAlert= async(info)=> Swal.fire({
  title:`Você deve ${info} antes de adicionar algo`,
  icon:'info',
  text:`${info} antes de adicioná-lo`,
  position:'center'

})
