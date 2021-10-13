import {Injectable} from '@angular/core'

@Injectable()
export class MessagesService {

    private messages = [
        {
            name: 'Stonefield',
            text: 'Concept phase is done for this project and entering Engineering phase',
            time: '1 min ago'
        },
        {
            name: 'Stonefactory',
            text: 'Project moved to Pilot stage',
            time: '2 hrs ago'
        },
        {
            name: 'Starbucks',
            text: 'Team analysis is done for this project',
            time: '10 hrs ago'
        },
        {
            name: 'Safeway',
            text: 'Target date is crossed for this project',
            time: '1 day ago'
        }
    ];   

    private files = [        
        {
            name: 'Safeway',
            text:'Stonefactory project is available for tracking in logistics screen',
            size: '',
            value: '47',
            color: 'primary',
            time: '1 day ago'
        },
        {
            name: 'Starbucks',
            text: 'Starbucks is now available for tracking in logistics screen',
            size: '~14.6 MB',
            value: '33',
            color: 'accent',
            time: '1 day ago'
        },
        {
            name: 'Amazon',
            text: 'Amazon project is marked as completed in tracking section',
            size: '~558 KB',
            value: '60',
            color: 'warn',
            time: '1 day ago'
        },
        {
            name: 'IBS',
            text: 'IBS project tracking status is updated',
            size: '~57 KB',
            value: '80',
            color: 'primary',
            time: '1 day ago'
        },
       
    ];

    private meetings = [
        {
            day: '09',
            month: 'May',
            title: 'Starbucks project ',
            text: 'Starbucks project is expected to be completed.',
            color: 'danger'
        },       
        {
            day: '15',
            month: 'May',
            title: 'PermiShare',
            text: 'Ideation stage is to be started for this project',
            color: 'primary'
        },
        {
            day: '12',
            month: 'June',
            title: 'Concept Implementation',
            text: 'Concept implemenation is expected to start for this project',
            color: 'info'
        },
        {
            day: '14',
            month: 'June',
            title: 'TRS',
            text: 'Kitchen implementation is due for this project',
            color: 'warning'
        },
    ];

    public getMessages():Array<Object> {
        return this.messages;
    }

    public getFiles():Array<Object> {
        return this.files;
    }

    public getMeetings():Array<Object> {
        return this.meetings;
    }   

}