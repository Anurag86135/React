import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './Components/Card'
// import User from './Components/User'  


const App = () => {
  const jobs = [
  {
    brandLogo: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.faa49ab5e1fff880.webp",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2.jpg",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAACUCAMAAABGMnfyAAAAY1BMVEX///8AAAC+vr6rq6vk5OTy8vJ/f3+QkJA9PT3X19f6+vrp6ens7Oz29vZERETh4eHR0dG1tbUhISHKyso2NjYTExOhoaEqKipgYGCZmZllZWVqampOTk5WVlYvLy92dnaHh4fQH/30AAAE0klEQVR4nO2d2YKqMAyGKchSZJVFUBbf/ymP4OgRW5VxGkpsv+u5aP4paZKm0TA0Go1Go9FoNF9AuKGJGchehVxCmrptQUgmeyEysdNTREZM2UuRR1hWO0JUl8GMCkKUl6Eh9ySylyMHk0yxZS9IBmFNtAyG7Tyq0Iay17Q8IaMCqX3Zi1oeVgUVoyeXVSHfyF7U4iSsCsRVzjXYHBUK9b6JA0cGR7njMt2xKuyUi6SDircZlDstrYJVwaOyV7U0wZHjH0vZq1qcx4RqoJW9qMUJOZETkb2o5aEe+0lsZS9qeTJGhU69wMnwy0cVcuUihjP2YwTpmcpFDGe2+YMKiYoqGJuHk1JB7zgwlaGWvRxZxHfnZKNcUnnjJoN3VPCcvDF+FHnTuyrczfhbmmRZRlkHaJdlaWX0/njw48y0BlIzi7+mEucnlusc28jLvfZ4cs3XZ0Gcuk7l/dRh9l7Vn6xvyLkTp4om9YSu7ctnSgTlodk/RpW76ODGi65ZOGnLWDUcCXmTsn/rm1XOKcBctKvw+k8/5WlwpZ/udcopvkyVwCmET6M3hu1ONBg8YBhQXs2BoUEYYW6Y+2keeydNTOfVpplgYYuvknauab+iR3Wh56f5e5M+okV0evrl7G3+ayI0Z6dfPzv3RNBhaRq1AEU4s5dt3zxSWBXOB6dsC+cQv7fjj+wQBFIB1Blxo0JQufZPwCIUJwwukteqIJLcwlC43vBaFQTiIXALBvhZ2eGInd4mlX9jjyTFhN0MBY69YGxhNwOnYrVKeH0r4jjJNm8mIegxgab2FECqgOaTgHWQPYbgcaR5b8zHFGg2gwGoAjmi2QxsL5dA8DQ+zKrIfwiSXGIAMnaqMOSVFyBT7F62cbMJAWVA1ElOAavyezytMCagDB2WQJr/OEQUOZ4r3Fl38x/iyTZuPlqGES3DiJZhRMswAilDh6fJRcswAikDopfKkHk2cWVbN5sUstPnKNu62WSQMrRoouktZL2hw+McQDsb8DgHUBlaJNe4sNcUhFiyzZsLZOBAyAFL5QX2PhvNdtjCypBj2Q6wMpAeyV0FrI9EM0yUmcQgGhx55ua9ISroEEJmFSM5hiDK58x8FEyE4Y0RaIfDjw4Ibvhj4L7xgXz9t7p2Dy8DKdbf6wAcT19ZezsYBX9ac6EzVz3WIYR+W3PjuOoMA7Que89p1dsB+nXNlbVfXMDWXm6svQiTsGMPIVh9hXaRryJffSyZLRBJYmiThJlfMWHtDnJggfwKxcBd6Fockl9s4P26gFCQtADxBuuLBEnnMPAEh0q2fTPxQRtfcNRlB2LIUBLRD/sAJpp4Bh5BVuMQPUQ0ACcY9GiaoEYsmNSiQfRJjLwb//gRBZYmh/9AyICnPfIGQNcHkih6ivgH/NgcwwXRN7v4HMMI89MTf2P19cdnUJGVKGQRwz2ZuOSiwukYLggbERchKTI8QZAOiOY38Hk5eZwUnec1UeR5r2fwNrj3wkD2NMvyDn1t0ti2g5imbl89lQK1X7jCny6fO2U29f2btOYnIg6a8TYvCWrm/9xaGe/825pux3wQKZ5y02t8Omn/6NzsaT0xpOmkZBNZaEqPMwg31s+OaEoavP73hkFSX658vJrijZmeEtDtt+xvjUaj0WiU5B8gJkfQvGKjdAAAAABJRU5ErkJggg==",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://png.pngtree.com/element_our/sm/20180627/sm_5b334611860fa.jpg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "JavaScript Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "12 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "Nvidia",
    datePosted: "8 days ago",
    post: "CUDA Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$72/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAACUCAMAAAAXgxO4AAAAkFBMVEX///8AW/4AUv709v/t8f9ki/4AXv6Cnf7Y4v83c/6OqP62wv8yb/7M2P8FYP69zf8AVf7c5v8ATP6twf6RrP5Nd/5lj/5cf/4NY/4AWP7T3v8AT/76+/8ASf56mf+etf4AQf7j6/+Eov4APP5ce/5KfP6ku/7Hzv8nav5tlP6isv+3x/5bhf5Kbf7E0/9bdf5/IGj4AAAE20lEQVR4nO2a6ZqiOhCGWRSVEQFxC+BG2w4uh77/uztBSAWy2C3DmZl+Tr2/SH1JpRrTRahgGAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjy5xn/0HA0jIFOo/ie3XTjKbrEX5jqZ9o18OvWUuPTaMxEI1qBmd+zkLu5yG7m78JUQ0Wfk210ZE9masrAc0cjUhyTJJcBc7ML5B6HY2um41T2Zt47B37Op0omhWHES7UGbJZe7SZTuNmcWzNFii75qvNSGYw10Fth6zQgZqvlqFLD1kzH+NMuyN/Mz91IDU1mYabRmuweK/msdLMY8ImUvnbXzmt8b5kqiFlmlQ1Riu2e2zIxXBKVFBQwj31QDQ7W3dOhOnCzCvzzuE0zGVE3O6WbeQbzXOc9B367D9XQRDe+aLQ2F+pmoXZzgZWQqcdmnZdKamtIn2gCT9zAPE/G/j9Jn92D1s8gD9BYW97+s1vt/7Os+RhLcYM25Q/xH2BcLm9gvTasFf7DPp4K5smwp8AjCzZP4m7UsEEjCzDuwThzeNJzxb0WuVR2S7Cb4taxc+DboMbyRM0GLeGBX/kAwneBI7AyMX/8gMQS7Mmkp8A9d8E4ilrKtUI1gP81ht+wVrhl4INMNC/2PQWO/G7sEJATVfiMuLm0BooOdtM5IC3IjkRzUhEEclbZEj1BKwuNwE2+Caora2KMEmZ0amNp7SnwYFMzkwMHTQG5Nbu6hHmZ7Nkox3ufVVeme58xY1/p8HyY12zldPg21/LWfq8cMTdbK4RRObuw/NOW6dOeAh94gLzGPT3CYzYsQEljqXPcsEm/K/JNCCNgIGrpOdLit7t6XDGMQuxMn6xwfRNn6Uh0YFWxRM4qB6l0Bhzc1ivMiFXZEovuw9oltwN9j1uymt68/3So2B0+S4dBK63wdDij48x2T/qP3H86bOwOFQ+gQI8VNNMn7A6tgLbuSXM/uKZr8MQsvT2AUjtlKMRn2KnSjd12WhkEHfmOFPdVzVAqoNpD0HgSu8GAFS+eGGfouiqbMbRWw0fidEHPxFk6ArtDotgdgmY1Xt3ASEz+3M8SsJbN45LtBsnhsajXrB0s+wr81ZflK3/9NflTCF6WHefRHrHzDlKlv7XZ98uyv1zXnOTyxAdojfIEDFifeOBXZj2tH23vVLc/qrfVHWufLj0Fjvw27IGGsuip0wSUbmr/3FujJXd7nXM+UVOeur1PNWKTafl/5kpuKvfppXQxvdcBrgSH01X3wn7gKJlVhX212MJyjfKcs200ndp/NKctsqpba8Eh+YUTCdUZCIV89SjFVB6lELP2P86pj4RVwNaCw184kSgyVw3NiseFRmsRlW5ukpvaf3qm1/CYPIu9zp1PJP4K0m96TutfouHLla2jrvBA84D9pC5RUbDH7FiSYIaw4PdTKlnEdKmEC39/fPlQf2/OlGzoP2ecqzXAgo8QdmQjjIcZbm+8pHwXPqBwyq8nojC7+5G00/gs8KeffTwJ2jFNawG3aSe4cWYwg0343V8Lt+nx2Ufh7904e/VRpMnj5id5fJZPhvvGXNo8XuYVnvLWRMjjj+9Vslu8b5fyvkDoayg/bdJpvl947UQQSz241li9hdjLe4g3sT6DIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIH+IfwG3u8BiOU856QAAAABJRU5ErkJggg==",
    companyName: "IBM",
    datePosted: "5 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Bengaluru, India"
  }
];

  return (
  <div className='parent'>
   {jobs.map(function(elem,idx){
    return <div key={idx}><Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} dateposted={elem.datePosted} location={elem.location}/></div>;

   })}
 </div>
  );
};

export default App



 