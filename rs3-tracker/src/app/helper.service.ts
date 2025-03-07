import { Injectable } from '@angular/core';
import { endOfMonth, endOfToday, nextWednesday } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  endOfTodayUTC(): Date {
    const localResetTime = endOfToday(); // TODO: not in UTC

    return new Date(
      Date.UTC(
        localResetTime.getUTCFullYear(),
        localResetTime.getUTCMonth(),
        localResetTime.getUTCDate(),
        23,
        59,
        59,
        999
      )
    );
  }

  nextWednesdayUTC(): Date {
    const localResetTime = nextWednesday(new Date()); // TODO: not in UTC

    return new Date(
      Date.UTC(
        localResetTime.getUTCFullYear(),
        localResetTime.getUTCMonth(),
        localResetTime.getUTCDate(),
        23,
        59,
        59,
        999
      )
    );
  }

  endOfMonthUTC(): Date {
    const localResetTime = endOfMonth(new Date()); // TODO: not in UTC

    return new Date(
      Date.UTC(
        localResetTime.getUTCFullYear(),
        localResetTime.getUTCMonth(),
        localResetTime.getUTCDate(),
        23,
        59,
        59,
        999
      )
    );
  }
}
