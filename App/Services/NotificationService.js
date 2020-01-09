import { db } from '../Config/db';

export default {

    addTest : () => {
        let testRef = db.ref('notifications/test');
        testRef.set({
            id: "Test",
            name: "Test",
            surname: "Firebase",
        })
    }

}