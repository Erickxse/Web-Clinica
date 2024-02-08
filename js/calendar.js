document.addEventListener('DOMContentLoaded', function() {

    let request_calendar = "../js/events.json"
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events:function(info, successCallback, failureCallback){
            fetch(request_calendar)
               .then(function(response){
                return response.json()
               })
               .then(function(data){
                    let events = data.events.map(function(event){
                        return {
                            title: event.eventTitle,
                            start: new Date(event.eventStartDate),
                            end: new Date(event.eventEndDate),
                            url: event.eventUrl,
                            location: event.eventLocation,
                            timeStart: event.eventTimeStart,
                            timeEnd: event.eventEndTime,
                        }
                    })

                    successCallback(events)
               })
        }
    });
    calendar.render();
});

