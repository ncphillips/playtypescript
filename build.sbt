name := """playtypescript"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file("."))
  .enablePlugins(PlayJava, SbtWeb, SbtTypescript)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs
)

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator

pipelineStages := Seq(rjs)

JsEngineKeys.engineType := JsEngineKeys.EngineType.Node
TypescriptKeys.target := "ES5"
TypescriptKeys.moduleKind := "amd"
