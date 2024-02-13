class Musiqa {
    constructor(nomi, avtor, turi, ishlab_chiqilgan_yili, qayta_kuylaganlar, vaqti, id) {
      this.nomi = nomi;
      this.avtor = avtor;
      this.turi = turi;
      this.ishlab_chiqilgan_yili = ishlab_chiqilgan_yili;
      this.qayta_kuylaganlar = qayta_kuylaganlar;
      this.vaqti = vaqti;
      this.id = id;
    }
  }
  
  let musiqalar = [];
  function musiqa_qushish(...musiqalar) {
    musiqalar.forEach(musiqa => {
      musiqaRoyxati.push(new Musiqa(...musiqa));
    });
  }

  function nomiTakrorlanmaganlar(musiqalar) {
    const nomlar = new Set();
    return musiqalar.filter(musiqa => {
      if (nomlar.has(musiqa.nomi)) {
        return false;
      }
      nomlar.add(musiqa.nomi);
      return true;
    });
  }
  
musiqa_qushish(["Agarda Pullar", "Timur Alixonov", "Pop", 2024, ["Hech kim qayta kuylamagan"], 135, 1]);
musiqa_qushish(["O‘zbekistonlik", "Konsta", "Rep", 2023, ["Hech kim qayta kuylamagan"], 159, 2]);
musiqa_qushish(["Indamaygina", "Jaloliddin Ahmadaliyev", "Consert", 2024, ["Shoxruh", "Sherzodbek"], 149, 3]);
musiqa_qushish(["O‘zbekistonlik", "Konsta", "Rep", 2015, ["Temur Alixonov", "Farrux Zokirov"], 159, 4]);
  
const nom_bir_martalikla = nomiTakrorlanmaganlar(musiqalar);
console.log(nom_bir_martalikla);
  