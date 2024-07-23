import RickMortyApiImg from "../assets/images/image-rick-&-morty-api.png";
import PandaShoot2Img from "../assets/images/image-panda-shooting-v2.png";
import ReporteCierreIupbImg from "../assets/images/image-cierre-iupb.png";
import ImageEjemplo2 from "../assets/images/ejemplo-1.jpg";
import BeneficiosIupbImg from "../assets/images/image-beneficios-iupb.png";

export const useProjects = () => {
  const listProjects = [
    {
      name: "Visualización: Informe Matrículas",
      desc: "Este proyecto condensó la información del proceso de matrículas de una institución de educación superior. Aunque útil, los datos personales fueron modificados para proteger la privacidad. Se usó Figma para los fondos y Power BI para la visualización y modelado de datos.",
      // github: "",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMWJhOTM2NTUtYTU0Ni00OGFmLWFmMTktODYyNjgxZWE2NWM3IiwidCI6ImIxNTk2YThmLWMxNzYtNGNlZS1hN2ZhLTNjMTk1YjY0MTA1MSIsImMiOjR9",
      image: ReporteCierreIupbImg,
      year: "2024",
      type: "freelance",
    },
    {
      name: "Visualización: Listado Beneficiarios",
      desc: "Este proyecto automatizó eficazmente la validación de requisitos para que los estudiantes accedan a un beneficio. Usando reportes del sistema académico y un modelado en Power BI, se creó una herramienta para brindar información inmediata. La información es un demo y no corresponde a datos reales.",
      // github: "",
      url: "https://app.powerbi.com/view?r=eyJrIjoiN2U3Y2VjNGItMDAzYi00Nzk0LWJhNjAtM2ZjODI0ZTNjMGY1IiwidCI6ImIxNTk2YThmLWMxNzYtNGNlZS1hN2ZhLTNjMTk1YjY0MTA1MSIsImMiOjR9",
      image: BeneficiosIupbImg,
      year: "2024",
      type: "freelance",
    },
    {
      name: "Juego: Caza Panda",
      desc: "Este proyecto fue el escalamiento de un juego que se desarrolló a lo largo de un curso que buscaba mejorar las habilidades en animaciones con CSS. En este caso, se agregó interactividad al juego haciendo uso de React",
      github: "https://github.com/CrisdCor/panda-shooting-v2",
      url: "https://panda-shooting-v2.vercel.app/",
      image: PandaShoot2Img,
      year: "2024",
      type: "freelance",
    },
    {
      name: "Rick & Morty - API",
      desc: "Proyecto académico desarrollado a lo largo de un curso gratuito impartido por el profesor Rafa Tárrega en Udemy que aportó las bases inciales en React.",
      github: "https://github.com/CrisdCor/curso-react-rick-morty",
      url: "https://curso-react-rick-morty.vercel.app/",
      image: RickMortyApiImg,
      year: "2024",
      type: "academic",
    },
    {
      name: "Coach CF train",
      desc: "Aplicación móvil en construcción...",
      // github: "",
      // url: "",
      image: ImageEjemplo2,
      year: "2024",
      type: "freelance",
    },
  ];

  return {
    // Properties
    listProjects,
    // Methods
  };
};
