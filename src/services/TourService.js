export class TourService{
    static tours = [
        {
            sno: "AA001",
            name: "Paris",
            imageUrl:
              "https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg",
          },
          {
            sno: "AA002",
            name: "Singapore",
            imageUrl:
              "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww",
          },
          {
            sno: "AA003",
            name: "Malaysia",
            imageUrl:
              "https://www.planetware.com/wpimages/2020/03/singapore-in-pictures-beautiful-places-to-photograph-marina-bay-sands.jpg",
          },
          {
            sno: "AA004",
            name: "Indi",
            imageUrl:
              "https://images.unsplash.com/photo-1600664356348-10686526af4f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D",
          },
    ]

    static getAllTours(){
        return this.tours;
    }
}