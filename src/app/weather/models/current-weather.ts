export interface IRoot
{
    name : string
    weather : IWeather
    main : IMain
    wind : IWind
    sys : ISystem
}
export interface ISystem{
    country : string
    sunrise : number
    sunset : number
}
export interface IWeather {
    id : number
    description : string
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
