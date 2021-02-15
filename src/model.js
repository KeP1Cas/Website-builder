import image from "./assets/bg.jpg";
import { TextBlock, TitleBlock, ImageBlock, ColumsBlock } from './classes/block'

const text =
  "Объе́ктно-ориенти́рованное программи́рование (ООП) — методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования.";

export const model = [
  new TitleBlock( "Коструктор сайтов",  {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),

  new TextBlock ( text, {
    tag: "p",
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),

  new ColumsBlock([
    "JavaScript (сокращённо JS, он же Ява скрипт, Джава скрипт, ранее так же именовался LiveScript) — популярный в web прототипно-ориентированный динамически типизированный Си-подобный нестандартизованный сценарный интерпретируемый язык программирования.",
    "React — это библиотека JavaScript, средство разработки веб-интерфейсов. Она позволяет создать структуру программного проекта, имеет определенные шаблоны и возможность их изменения.",
    "Redux – это контейнер с предсказуемым состоянием для приложений JavaScript и очень ценный инструмент для управления состоянием приложения.",
  ], {
    styles: {
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
      padding: "2rem",
      color: "#fff",
      "font-weight": "bold",
    },
  }),
  
  new ImageBlock ( image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Img :3",
  })
];
