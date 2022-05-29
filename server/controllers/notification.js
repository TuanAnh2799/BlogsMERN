import admin from '../firebaseHelper.js';

export const sendNotification = async(req, res)=> {
    try {
        const result = await admin.messaging().sendToDevice(
            [
                'f5-NIls-SBCZcu3TIcAcct:APA91bGocnLKGp_gfF5Oi8WCbs-2Ak516hxeyhnMUoVhXQvTagakLO_y5vW73kca-2Pc_i6jFMRreeS-5a99tAjhAEQuaHTAPyLv1NUtzCriaIB71Loom33XFMbU7s_vrX_LlRlNHZim'
            ], // device fcm tokens...
            {
              notification: {
                title: "Amusf",
                body: "You have a new video, watch now!",
              },
              data: {
                screen: 'Settings',
              }
            },
            {
              // Required for background/quit data-only messages on iOS
              contentAvailable: true,
              // Required for background/quit data-only messages on Android
              priority: 'high',
            },
          );
    
        res.status(200).send({
            notification: 'Notification sent successfully'
        });
        console.log('Notification sent successfully:', result);
    } catch (error) {
        res.status(500).json({err : error});
        console.log('err:', error);
    }
    
}