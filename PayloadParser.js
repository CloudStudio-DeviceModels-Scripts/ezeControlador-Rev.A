function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)


    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------


  

        //variables PAG ABAJO
        var cong1s = device.endpoints.byAddress(1);
        var cong1i = device.endpoints.byAddress(2);
        var cong2s = device.endpoints.byAddress(3);
        var cong2i = device.endpoints.byAddress(4);
        var cong1Puerta = device.endpoints.byAddress(5);
        var cong2Puerta = device.endpoints.byAddress(6);
        var cong1Alarma = device.endpoints.byAddress(7);
        var cong2Alarma = device.endpoints.byAddress(8);
        var salaTemp = device.endpoints.byAddress(9);
        var salahum = device.endpoints.byAddress(10);
        

        var tiempoUnix = jsonPayload.timestamp;
        var fecha = new Date(tiempoUnix * 1000);
        var timestamp = fecha.toISOString();
        env.log("LA FECHA ES ----->   ",timestamp);

        
        



       
        
 

/*-------------------------------------------------------------------------------------------------------------------

SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG

-------------------------------------------------------------------------------------------------------------------*/
// Sentencia NODE-RED Para todos los endpoints


if (jsonPayload.ser == "RUT955"){
            const datos = jsonPayload;
            var data = jsonPayload.data;

            const datosSeparados = jsonPayload.data.split(',');
            datosSeparados.forEach(dato => {
            env.log(dato.trim());
            });
            for (let i = 0; i < datosSeparados.length; i++) {
                    env.log("Valor  --> ",[i],datosSeparados[i]);
            }
            var dato1 =datosSeparados[0].split('[');
            var dato2 =parseInt(datosSeparados[1]);
            var dato3 =parseInt(datosSeparados[2]);
            var dato4 =parseInt(datosSeparados[3]);
            var dato5 =parseInt(datosSeparados[4]);
            var dato6 =parseInt(datosSeparados[5]);
            var dato7 =parseInt(datosSeparados[6]);
            var dato8 =parseInt(datosSeparados[7]);
            var dato9 =parseInt(datosSeparados[8]);
            var dato10 =parseInt(datosSeparados[9]);
          
            env.log("Time  --> ",timestamp);

            cong1s.updateTemperatureSensorStatus(parseInt(dato1[1]),timestamp);
            env.log("Valor 1 --> ",parseInt(dato1[1]));
            
            cong1i.updateTemperatureSensorStatus(dato2,timestamp);
            env.log("Valor 2 --> ",dato2);

            cong2s.updateTemperatureSensorStatus(dato3,timestamp);
            env.log("Valor 3 --> ",dato3);

            cong2i.updateTemperatureSensorStatus(dato4,timestamp);
            env.log("Valor 4 --> ",dato4);



            if (dato5==0){
                var dato5new=1
            }
            if (dato5==100){
                var dato5new=2
            }
            cong1Puerta.updateIASSensorStatus(dato5new,timestamp);
            env.log("Valor 5 --> ",dato5new);


            if (dato6==0){
                var dato6new=1
            }
            if (dato6==100){
                var dato6new=2
            }
            cong2Puerta.updateIASSensorStatus(dato6new,timestamp);
            env.log("Valor 6 --> ",dato6new);

            if (dato7==100){
                var dato7new=1
            }
            if (dato7==0){
                var dato7new=2
            }
            cong1Alarma.updateIASSensorStatus(dato7new,timestamp);
            env.log("Valor 7 --> ",dato7new);


            if (dato8==100){
                var dato8new=1
            }
            if (dato8==0){
                var dato8new=2
            }
            cong2Alarma.updateIASSensorStatus(dato8new,timestamp);
            env.log("Valor 8 --> ",dato8new);

            salaTemp.updateTemperatureSensorStatus(dato9,timestamp);
            env.log("Valor 9 --> ",dato9);

            salahum.updateHumiditySensorStatus(dato10,timestamp);
            env.log("Valor 10 --> ",dato10);

            
            
                            
                                                         
    }



  
}