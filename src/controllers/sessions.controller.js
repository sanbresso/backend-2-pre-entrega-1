export function getSessionsInfo(req, res) {
  return res.status(200).json({
    status: "success",
    message: "Módulo de sesiones preparado"
  });
}