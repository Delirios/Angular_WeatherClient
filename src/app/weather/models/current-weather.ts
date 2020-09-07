export interface IRoot
{
    name : string
    weather : IWeather
    main : IMain
    wind : IWind
    sys : ISystem
}
export interface IWeather{
    descriprion : string
    icon : string
}
export interface IMain {
    temp : number
    feels_like : number
    pressure : number
    humidity : number
}
export interface IWind{
    speed : number
}
export interface ISystem{
    country : string
    sunrice : number
    sunset : number
}