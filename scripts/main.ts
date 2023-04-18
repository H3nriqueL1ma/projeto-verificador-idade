import $ from "jquery";

const text: JQuery<HTMLParagraphElement> = $("#text");
const text_img: JQuery<HTMLDivElement> = $("#text_image");
const button: JQuery<HTMLButtonElement> = $("#verify");
const birth: JQuery<HTMLInputElement> = $("#birth");
const image: JQuery<HTMLImageElement> = $("#image");

if (button.length > 0 && birth.length > 0) {
  button.on("click", (event) => {
    event.preventDefault();

    const date: Date = new Date();
    const year: number = date.getFullYear();
    const birth_ = Number(birth.val());
    const age: number = year - birth_;
    const sex: string | number | string[] | undefined = $(
      'input[name="options"]:checked'
    ).val();
    const sexOption: JQuery<HTMLElement> = $('input[name="options"]:checked');
    if (sexOption.length === 0) {
      alert("[ERROR]: SEXO INVÁLIDO!");
      return;
    } else {
      if (birth_ > year || birth_ <= 0) {
        alert("[ERROR]: ANO INVÁLIDO!");
      } else {
        text.text("");
        if (sex === "male") {
          if (age < 18 && age > 0) {
            text_img.text(`Detectamos Menino com ${age} anos.`);
            image.attr("src", "images/foto-bebe-m.png");
          } else if (age < 20 && age >= 18) {
            text_img.text(`Detectamos Menino com ${age} anos.`);
            image.attr("src", "images/foto-jovem-m.png");
          } else if (age < 64 && age >= 20) {
            text_img.text(`Detectamos Homem com ${age} anos.`);
            image.attr("src", "images/foto-adulto-m.png");
          } else if (age >= 64) {
            text_img.text(`Detectamos Idoso com ${age} anos.`);
            image.attr("src", "images/foto-idoso-m.png");
          }
        } else if (sex === "female") {
          if (age < 18 && age > 0) {
            text_img.text(`Detectamos Menina com ${age} anos.`);
            image.attr("src", "images/foto-bebe-f.png");
          } else if (age < 20 && age >= 18) {
            text_img.text(`Detectamos Menina com ${age} anos.`);
            image.attr("src", "images/foto-jovem-f.png");
          } else if (age < 64 && age >= 20) {
            text_img.text(`Detectamos Mulher com ${age} anos.`);
            image.attr("src", "images/foto-adulto-f.png");
          } else if (age >= 64) {
            text_img.text(`Detectamos Idosa com ${age} anos.`);
            image.attr("src", "images/foto-idoso-f.png");
          }
        }
      }
    }
  });
}
