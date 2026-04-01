import { createPeerConnection } from "./webrtcManager";

let peerConnection: RTCPeerConnection | null = null;

export async function startCall(
  roomId: string,
  localVideo: HTMLVideoElement,
  remoteVideo: HTMLVideoElement
) {
  // Captura mídia local
  const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  localVideo.srcObject = localStream;

  // Cria conexão
  peerConnection = createPeerConnection(localStream, (remoteStream) => {
    remoteVideo.srcObject = remoteStream;
  });

  // Cria oferta
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  // Aqui você enviaria a oferta para o servidor de sinalização (Supabase, WebSocket, etc.)
  console.log("Oferta criada:", offer);
}

export function endCall(roomId: string) {
  if (peerConnection) {
    peerConnection.close();
    peerConnection = null;
    console.log("Chamada encerrada:", roomId);
  }
}
