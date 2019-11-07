
sendController = async (csv) => {
    const st = new ServiceStation();
    const result = st.mapServiceStation(csv);

    console.log(result)

    const respuesta = await fetch("../AddOrEditServiceStationsImport", {
        headers: { "accept": "application/json", "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({
            model: result,
        })
    })
    const result2 = await respuesta.json()
    console.log(result2)
    //await swal("Hola", "Mensaje", "success")
}
