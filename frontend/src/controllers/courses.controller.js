import urlWebServices from "./webServices";
const localUserId = localStorage.getItem('userId');

export const getCourses = async () => {
    try {
        const response = await fetch(urlWebServices.getCourses, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'x-access-token': localStorage.getItem('x')
            }
        });
        let data = await response.json();
      
        return data;

    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}



export const addReview = async (review, course_id) => {
    try {
        review.course_id = course_id;
        const formData = new URLSearchParams(review);
        console.log("FORMDATA",formData)
        const response = await fetch(urlWebServices.addReview, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        let data = await response.json();
        return data;

    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}


export const acceptReview = async (course_id, review_id) => {
    const url = urlWebServices.acceptReview.replace(":id", localUserId);
    if (!localUserId) {
        return ({rdo:1,mensaje:"No se ha encontrado el perfil"});
    }
    try {

        const formData = new URLSearchParams({course_id, review_id, tutor_id: localUserId});
        console.log(formData, "FORM")
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'x-access-token': localStorage.getItem('x')
            },
            body: formData
        });

        let data = await response.json();
        return data;

    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}


export const createCourse = async (course) => {
    const url = urlWebServices.createCourse.replace(":id", localUserId);
    if (!localUserId) {
        return ({rdo:1,mensaje:"No se ha encontrado el perfil"});
    }
    try {
        const formData = new URLSearchParams(course);
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'x-access-token': localStorage.getItem('x')
            },
            body: formData
        });

        let data = await response.json();
        return data;

    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}


export const manageCourseStatus = async (course_id, ac_id, status) => {
    const url = urlWebServices.manageCourseStatus.replace(":id", localUserId);
    if (!localUserId) {
        return ({rdo:1,mensaje:"No se ha encontrado el perfil"});
    }

    try {
        const formData = new URLSearchParams({course_id, ac_id, status, tutor_id: localUserId});
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'x-access-token': localStorage.getItem('x')
            },
            body: formData
        });

        let data = await response.json();
        return data;

    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}


export const updateCourse = async (course) => {
    const url = urlWebServices.updateCourse.replace(":id", localUserId);
    if (!localUserId) {
        return ({rdo:1,mensaje:"No se ha encontrado el perfil"});
    }
    try {
        const formData = new URLSearchParams(course);
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'x-access-token': localStorage.getItem('x')
            },
            body: formData
        });

        let data = await response.json();
        return data;

    } catch (e) {
        return ({rdo:1,mensaje:"Ha ocurrido un error"});
    }
}