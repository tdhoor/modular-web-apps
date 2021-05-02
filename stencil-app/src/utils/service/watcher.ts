import { Subject } from 'rxjs';

export class Watcher {
    private static instance: Watcher;
    loaded$: Subject<string> = new Subject<string>();

    private constructor(){}
  
    public static getInstance(): Watcher {
        if (!Watcher.instance) {
            Watcher.instance = new Watcher();
        }

        return Watcher.instance;
    }
  

}