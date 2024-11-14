const headerBarData = ["Собаки", "Кошки", "Другие животные",  "Стримы",  "Сервисы", "Материалы", "Зоотовары"]
const menuItems = [
    { name: "Заводчик" },
    { name: "Питомцы" },
    { name: "Пометы" },
    { name: "Блоги" },
    { name: "Вопросы" },
    { name: "Выставки" },
    { name: "Отзывы", count: 5 }
  ];
  
const BreadcrumbData = ["Главная", "Заводчики", "Марина Гриндер"]
const navProfile = {
    name:"Инесса",
    profile: "https://s3-alpha-sig.figma.com/img/6267/26b2/be2595433c28eda2a913cea75a86a8c4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qo25mH5KrmS-RY7DvnYOryLXDBbQxkKSgZY7hg75qijEyfG8dJ4kyPPfbqbXa8AabX3I96noMKweX-YSqRSW-xWt9bkZ1msjalzRNYpf0JGHPVHHlaaLewwAh8aWR0T7CrFWLPicgHH2i4~IVV~ByrK9IEI2ANLOMO1scXaD9Q8ccdZ3imcmizlcCWNdWEUs4UBX5xeUW-wjseVK0xkOO1ljtZOQsR0Brcyd1896psWbcPI-2rZPpoTPfWqFpAWp~w8avVkD8ISBYIMYbK8RKN2hYVdDb6xO54BwesGDlldT2H2vDEkuGfJ88Y~zsrloiTlEw8vweuJhhGqORc0H-Q__"
}

const TextParagraph = "Марина Гриндер — заводчик болонок с многолетним опытом, известная своим профессионализмом и трепетным отношением к каждому питомцу. Ее питомник специализируется на разведении высокопородных болонок, соответствующих международным стандартам. Марина уделяет особое внимание здоровью, социализации и правильному воспитанию щенков с самого раннего возраста."

const informationData = [{
    status: "Заводчик гуру",
    experience: "Опыт 8 лет",
    profession: "кинолог",
    location: "Химки",
    country: "Москва",
    likes: 24,
    comments: 5,
    isSubscribed: true
}]

const NoteAlert= "Заводчик свяжется с вами в удобное для вас время"

const footerData = ["© 2020 – 2024 Сервис подбора питомцев", "ООО «Энималмор». Все права защищены.", "О компании", "Контакты", "Правовые документы", "Сотрудничество"]

const images = [
    'https://s3-alpha-sig.figma.com/img/20f4/c50d/67f3f972d2c6aa9273e5787ea05fdf6b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IE8HNknulWv5-L76J0mbH7dI2yPip63rDzxpMI5CKUfqkEGZRAwC-grQIKSFdldYcN3pQK1EryU5fMwwgfF-v4E9v~P4mMB5eiFhYpFbh66anjxkxqJUv-s0C9VSh5Z7WlMPC1EmLDEeqpxVkiO7gD6~f49478jnpY6gLJG2yHgwRjBNz~JG~D6NPTgEiC5EIKGjZia4B~xKI2z7kJnTmJdB8XkvN~enjPRajykD2W6AkBgozFlMwljFTyf5XfwpAPo00xk9svA7nPQ4nbBpnCSjL4fjDcaOCM2KSlIoXX7GPkmIV4HvGco-GeTCzeSST1MrWMkgnbx46Hucvj-IZQ__',
    'https://s3-alpha-sig.figma.com/img/a39f/7b72/df366e6aca00202102dbbd9220685322?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpbG7nhCku8drF6cLISOXjsI1XYIzRlR80kxXTLtOhnmB8c0a7RM4xIForXtTuV-q04TYrSu9EsLwe1utLDit-Sbwk4CFFJj~7jozisXiX0~aaxXPV08A3KOkiqFcfI2lITHUDc7F07CxcTvfJgxM2kDEahiahDqC~8Uv4CcujP~MSRdzlzENi9l24sBB85SkW~yY0ta5Mv3eZGzxmR3MxhDG24w0RtBecI97myOOUva29L8AlunXqzkz4YZCLFMf4-yh8TWH9JhZbgGpZpvk4JCvDbaRDAJo3akz3W3AU83tJCemlp78eo4dqzKLMsaO7A247Qk7zIl2N3JGiXB7Q__',
    'https://s3-alpha-sig.figma.com/img/38c6/2f79/fc8dedc59edaaeb7adafe308984be731?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LBwxdQxq7GBWKCTGm9pfVzZ5-tnuJXXGEfnuYhn6mZvNVHMJWrKV9QvGm8hcneMbziNIr32pdYV9uYqsxcpZHaL3x1lfVinZeoKpxS4HHGjjgeL2F0OJQZCgePGzLbJhvybUCaAnKl7xBOt5GQrHR36gg~ih-pAKphZturi3trZoRjqYFU1M-LAVJpw3fKRUKWolmnE60de4GOEk83BrNI40xeen0lrXxmcQ4-Ihkcoi1rOM7ifv6ACHRFRQK1Gt36IzFXNCQsfQds0aGmZfhi9rUE6aVxbHxXEkBMFJQ2LsiGg3mLE~S-6Akwcpir4-xoKHxpHR1b2-SKGGcfs0mQ__',
    'https://s3-alpha-sig.figma.com/img/2668/587f/116cffc774640ba8d38b9930781ef089?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cQYiMw6vPp6sWuwXP19MJu9r1m201dvMM7mw9JmzgioZHd64nVCpNHRSlmxvAoPUJKEzEpk5wG1wyoTVJ~mSjY3lr~2rZ8MYeyZVHT9Sb7gm7FK0NS0qxgBRKfaaRubNrpzfXz2LRn-dK9W2Pwa3Pu7E~QRu2C9CqxcOqLp4hjx5KI49oWv9ZFo854SpsgPu38OVe~k28RGJ~xPYNK-2sMiX9BfH32g9tfFBA6w7NMsGmroApivtuz0WafI7v2V2JqdJeEhgIQIoLMblAux-q36hDrUgElx12PcxEbUwTU-1QgDzZLoUBrhrhRs2toHLKR-3l1WDypsft7JBEUFibA__',
  ];


export { menuItems, BreadcrumbData, TextParagraph, informationData, NoteAlert, footerData, headerBarData, navProfile, images }