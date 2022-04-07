/* 
    Dada la siguiente cadena extraida de una pagina web (es una porsión de HTML)
    Cada línea corresponde al tiempo en minutos y segundos de un tipo de video
    Nuestro cliente nos solicita desarrollar una función que permita calcular el tiempo total en segundos,
    por tipo de video (Flexbox Video, Redux Video) 
*/


const str = `<ul>
<li data-time="5:17">Flexbox Video</li>
<li data-time="8:22">Flexbox Video</li>
<li data-time="3:34">Redux Video</li>
<li data-time="5:23">Flexbox Video</li>
<li data-time="7:12">Flexbox Video</li>
<li data-time="7:24">Redux Video</li>
<li data-time="6:46">Flexbox Video</li>
<li data-time="4:45">Flexbox Video</li>
<li data-time="4:40">Flexbox Video</li>
<li data-time="7:58">Redux Video</li>
<li data-time="11:51">Flexbox Video</li>
<li data-time="9:13">Flexbox Video</li>
<li data-time="5:50">Flexbox Video</li>
<li data-time="5:52">Redux Video</li>
<li data-time="5:49">Flexbox Video</li>
<li data-time="8:57">Flexbox Video</li>
<li data-time="11:29">Flexbox Video</li>
<li data-time="3:07">Flexbox Video</li>
<li data-time="5:59">Redux Video</li>
<li data-time="3:31">Flexbox Video</li>
</ul>`;

function getVideos(str){
    return str
        .replace('<ul>','')
        .replace('</ul>','')
        .split('</li>')
        .slice(0, -1)
        .map(video => ({
            type: video.split('>')[1],
            min: parseInt(video.split('"')[1].split(':')[0]),
            seg: parseInt(video.split('"')[1].split(':')[1])
        }))       
}

function totalSegXTipo(videos, type){
    let totalSegundos = 0;
    videos
        .filter(video => video.type === type)
        .forEach(video => totalSegundos = totalSegundos + video.seg + video.min * 60);

    return totalSegundos;
    // Desafio: Hay otra forma de totalizar utilizando reduce
}

console.log(getVideos(str));

console.log(totalSegXTipo(getVideos(str), "Flexbox Video"));